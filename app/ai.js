/* STRATIX — client-side AI + document parsing (Anthropic Claude).
   Personal/internal use: API key lives in this browser (localStorage).
   Requires internet: calls api.anthropic.com and loads parser libs from CDN. */
(function () {
  const LS_KEY = "stx-anthropic-key";
  const LS_MODEL = "stx-anthropic-model";
  const DEFAULT_MODEL = "claude-sonnet-5";
  const API = "https://api.anthropic.com/v1/messages";

  const getKey = () => { try { return localStorage.getItem(LS_KEY) || ""; } catch (e) { return ""; } };
  const setKey = (k) => { try { localStorage.setItem(LS_KEY, k || ""); } catch (e) {} };
  const getModel = () => { try { return localStorage.getItem(LS_MODEL) || DEFAULT_MODEL; } catch (e) { return DEFAULT_MODEL; } };
  const setModel = (m) => { try { localStorage.setItem(LS_MODEL, m || DEFAULT_MODEL); } catch (e) {} };
  const hasKey = () => !!getKey();

  // ---- lazy CDN loaders ----
  const _loaded = {};
  function loadScript(url) {
    if (_loaded[url]) return _loaded[url];
    _loaded[url] = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = url; s.onload = res; s.onerror = () => rej(new Error("gagal memuat " + url));
      document.head.appendChild(s);
    });
    return _loaded[url];
  }

  let _pdfjs = null;
  async function getPdfjs() {
    if (_pdfjs) return _pdfjs;
    const mod = await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.min.mjs");
    mod.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.worker.min.mjs";
    _pdfjs = mod; return mod;
  }

  // ---- document parsing ----
  async function parseFile(file) {
    const name = file.name || "dokumen";
    const ext = (name.split(".").pop() || "").toLowerCase();
    let text = "";
    try {
      if (ext === "pdf") {
        const pdfjs = await getPdfjs();
        const buf = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument({ data: buf }).promise;
        const parts = [];
        const max = Math.min(pdf.numPages, 150);
        for (let i = 1; i <= max; i++) {
          const page = await pdf.getPage(i);
          const c = await page.getTextContent();
          // Rekonstruksi baris berbasis posisi Y (jaga struktur tabel laporan keuangan)
          const rows = {};
          for (const it of c.items) {
            if (!it.str) continue;
            const y = Math.round(it.transform[5]);
            (rows[y] = rows[y] || []).push(it);
          }
          const line = Object.keys(rows).map(Number).sort((p, q) => q - p)
            .map((y) => rows[y].sort((p, q) => p.transform[4] - q.transform[4]).map((it) => it.str).join(" ").replace(/\s+/g, " ").trim())
            .filter((l) => l).join("\n");
          parts.push(line);
        }
        text = parts.join("\n\n");
      } else if (ext === "xlsx" || ext === "xls" || ext === "csv") {
        await loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js");
        const buf = await file.arrayBuffer();
        const wb = window.XLSX.read(buf, { type: "array" });
        text = wb.SheetNames.map((n) => `# ${n}\n` + window.XLSX.utils.sheet_to_csv(wb.Sheets[n])).join("\n\n");
      } else if (ext === "docx") {
        await loadScript("https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js");
        const buf = await file.arrayBuffer();
        const r = await window.mammoth.extractRawText({ arrayBuffer: buf });
        text = r.value || "";
      } else {
        text = await file.text();
      }
    } catch (e) {
      text = "[Gagal membaca " + name + ": " + e.message + "]";
    }
    return { name, ext, text: text.trim(), chars: text.trim().length };
  }

  // ---- Anthropic call ----
  async function callClaude({ system, messages, max_tokens = 4096, temperature = 0.3 }) {
    const key = getKey();
    if (!key) throw new Error("API Key Anthropic belum diatur. Buka Pengaturan → API Key.");
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({ model: getModel(), max_tokens, system, messages }),
    });
    if (!res.ok) {
      let msg = "HTTP " + res.status;
      try { const j = await res.json(); msg = (j.error && j.error.message) || msg; } catch (e) {}
      throw new Error(msg);
    }
    const j = await res.json();
    const text = (j.content || []).filter((b) => b.type === "text").map((b) => b.text).join("").trim();
    if (!text) {
      const why = j.stop_reason === "max_tokens"
        ? "output terpotong oleh limit token — perbesar max_tokens atau persempit pertanyaan"
        : "tidak ada blok teks pada respons" + (j.stop_reason ? " (stop_reason: " + j.stop_reason + ")" : "");
      throw new Error("Model tidak mengembalikan teks: " + why);
    }
    return text;
  }

  // ---- simple chat ----
  async function chat({ history, question, contextText, agentLabel, period }) {
    let sys = `Anda adalah ${agentLabel || "Analis AI"} pada aplikasi konsultan STRATIX. Jawab dalam Bahasa Indonesia, ringkas, tajam, dan berbasis bukti dari dokumen yang diberikan. Jika informasi tidak ada di dokumen, katakan dengan jujur. Periode analisis: ${period || "-"}.`;
    if (contextText) sys += "\n\n=== DOKUMEN PERUSAHAAN (konteks) ===\n\n" + contextText.slice(0, 200000);
    const msgs = [];
    (history || []).forEach((m) => {
      const role = m.role === "ai" ? "assistant" : "user";
      if (msgs.length === 0 && role === "assistant") return;                 // percakapan harus mulai dari user
      const last = msgs[msgs.length - 1];
      if (last && last.role === role) { last.content += "\n\n" + m.text; }   // gabung peran beruntun (hindari 400)
      else msgs.push({ role, content: m.text });
    });
    const lastMsg = msgs[msgs.length - 1];
    if (lastMsg && lastMsg.role === "user") lastMsg.content += "\n\n" + question;
    else msgs.push({ role: "user", content: question });
    return callClaude({ system: sys, messages: msgs, max_tokens: 8000 });
  }

  function extractJSON(s) {
    const a = s.indexOf("{");
    if (a < 0) throw new Error("Respons AI tidak berformat JSON.");
    // Cari '}' penutup yang cocok, hormati string & escape.
    let depth = 0, inStr = false, esc = false, end = -1;
    for (let i = a; i < s.length; i++) {
      const c = s[i];
      if (esc) { esc = false; continue; }
      if (c === "\\") { esc = true; continue; }
      if (c === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) { end = i; break; } }
    }
    let body = end >= 0 ? s.slice(a, end + 1) : s.slice(a);
    try { return JSON.parse(body); } catch (e) { /* coba perbaiki respons terpotong */ }
    return repairTruncatedJSON(body); // sudah mengembalikan objek hasil parse
  }

  // Tutup string yang terbuka + semua array/objek yang belum ditutup.
  function balanceClose(str) {
    let s = str.replace(/,\s*$/, "");
    const open = [];
    let inStr = false, esc = false;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (esc) { esc = false; continue; }
      if (c === "\\") { esc = true; continue; }
      if (c === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (c === "{" || c === "[") open.push(c);
      else if (c === "}" || c === "]") open.pop();
    }
    if (inStr) s += '"';
    s = s.replace(/,\s*$/, "");
    for (let i = open.length - 1; i >= 0; i--) s += open[i] === "{" ? "}" : "]";
    return s;
  }

  // Indeks koma struktural terakhir (di luar string).
  function lastStructuralComma(s) {
    let inStr = false, esc = false, idx = -1;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (esc) { esc = false; continue; }
      if (c === "\\") { esc = true; continue; }
      if (c === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (c === ",") idx = i;
    }
    return idx;
  }

  // Perbaiki JSON terpotong (batas token): iteratif tutup lalu mundur ke koma
  // sebelumnya bila masih gagal, sampai berhasil di-parse.
  function repairTruncatedJSON(str) {
    let s = str;
    for (let guard = 0; guard < 2000; guard++) {
      try { return JSON.parse(balanceClose(s)); } catch (e) {}
      const idx = lastStructuralComma(s);
      if (idx < 0) break;
      s = s.slice(0, idx);
    }
    throw new Error("Respons AI terpotong dan tidak dapat diperbaiki. Coba jalankan ulang analisis.");
  }

  // ---- Finance analysis: returns object matching AgentFinance data shape ----
  async function analyzeFinance({ company, contextText }) {
    const sys = "Anda adalah Analis Keuangan komprehensif kelas dunia. Analisis dokumen keuangan perusahaan dan keluarkan HANYA JSON valid (tanpa markdown, tanpa teks lain) sesuai skema. Semua angka & narasi dalam Bahasa Indonesia (desimal koma). Jika data tak tersedia, estimasikan wajar dan beri tanda \u2014.";
    const schema = `{
 "kpis":[{"label":"Revenue FY<tahun>","value":"Rp X,XX","unit":"T|M","delta":"+X,X%","hint":"YoY"},{"label":"EBITDA Margin","value":"XX,X","unit":"%","delta":"","hint":""},{"label":"Net Profit","value":"Rp XXX","unit":"M","delta":"","hint":""},{"label":"Free Cash Flow","value":"Rp XXX","unit":"M","delta":"","hint":""}],
 "revenueLabels":["2020","2021","2022","2023","2024"],
 "revenueSeries":[number,...],   // WAJIB dalam TRILIUN Rupiah (mis. 5.02 = Rp 5,02 triliun) — JANGAN miliar
 "marginSeries":[number,...],
 "financials":{"labels":["2020","2021","2022","2023","2024"],"lines":{"pendapatan":[number,...],"laba_kotor":[number,...],"beban_usaha":[number,...],"laba_usaha":[number,...],"laba_bersih":[number,...],"total_aset":[number,...],"aset_lancar":[number,...],"aset_tidak_lancar":[number,...],"total_liabilitas":[number,...],"liabilitas_pendek":[number,...],"liabilitas_panjang":[number,...],"kas_operasi":[number,...],"kas_investasi":[number,...],"kas_pendanaan":[number,...]},"bars":{"gross_margin":[number,...],"ebitda_margin":[number,...],"current_ratio":[number,...],"cash_ratio":[number,...],"dte":[number,...],"roe":[number,...],"roa":[number,...],"net_profit_margin":[number,...],"interest_coverage":[number,...],"bopo":[number,...],"rev_growth":[number,...],"ebitda_growth":[number,...],"np_growth":[number,...]},"capex":[number,...]},
 "ratios":[{"r":"Current Ratio","v":"1,84\u00d7","b":"1,50\u00d7","s":"Baik|Waspada"}],
 "healthScore":number(0-100),
 "healthLabel":"Sehat|Waspada|Kritis",
 "verdict":"1-2 kalimat kesimpulan analis",
 "reviewMeta":{"period":"Tahun Buku ...","basis":"Laporan Keuangan Konsolidasian","prepared":"Agen Analis Keuangan STRATIX"},
 "concerns":[{"title":"...","level":"negative|warning|info","area":"...","metric":"...","nilai":"...","benchmark":"...","tren":"Memburuk|Stabil|Membaik","detail":"...","implication":"...","rekomendasi":"..."}],
 "review":[{"h":"1. Ikhtisar Kinerja","b":"paragraf naratif"},{"h":"2. Profitabilitas & Kualitas Laba","b":"..."},{"h":"3. Likuiditas & Solvabilitas","b":"..."},{"h":"4. Arus Kas","b":"..."},{"h":"5. Efisiensi Modal Kerja","b":"..."},{"h":"6. Struktur Permodalan","b":"..."},{"h":"7. Kesimpulan Analis","b":"..."}]
}`;
    const user = `Perusahaan: ${company || "-"}\n\nDOKUMEN:\n${(contextText || "").slice(0, 260000)}\n\nHasilkan JSON sesuai skema berikut. Untuk "review": setiap seksi HARUS thesis-driven & mendalam (2-3 paragraf padat) — mulai dari temuan material, sebut angka spesifik dari dokumen, DEKOMPOSISI driver (mengapa angka bergerak: volume/harga/segmen/biaya/one-off), YoY, kualitas laba & konversi kas, implikasi keputusan, dan risiko. Setingkat memo analis institusional, bukan ringkasan. JANGAN mengarang angka; bila data tak ada, nyatakan eksplisit. Tulis body tiap seksi sebagai beberapa paragraf pendek dipisah satu baris kosong (satu poin per paragraf), dengan paragraf terakhir diawali "Implikasi strategis:". Bersikap kritis & obyektif: bedakan pertumbuhan organik dari one-off/kebijakan, dan sebut terus terang bila kualitas laba/likuiditas mengkhawatirkan. Isi 4-5 concerns, 5-6 ratios. Seri angka sepanjang label. ATURAN UNIT & PERIODE (WAJIB): Dokumen adalah LAPORAN TAHUNAN yang memuat Ikhtisar Data Keuangan multi-tahun (umumnya 5 tahun) dan laporan keuangan komparatif; gabungan beberapa laporan tahunan menutupi rentang tahun yang lebih panjang. Bangun seri untuk SELURUH tahun yang tersedia lintas SEMUA dokumen — JANGAN batasi hanya ke tahun terbaru (komparatif sering mundur hingga 2019). Bila satu tahun muncul di lebih dari satu laporan, pakai angka dari laporan yang paling andal/terbaru untuk tahun tersebut. (1) "revenueLabels" adalah tahun buku yang BENAR-BENAR ADA di dokumen, urut menaik; elemen TERAKHIR = tahun buku TERBARU yang tersedia. (2) "revenueSeries" dalam TRILIUN Rupiah, selaras urutan label. (3) kpis[0] Revenue = tahun buku terbaru, unit "T", nilainya = titik terakhir revenueSeries (Triliun). (4) kpis[2] Net Profit & kpis[3] Free Cash Flow = tahun buku terbaru, unit "M" (Miliar). (5) Semua indikator KPI mencerminkan DATA TERBARU dari dokumen, bukan estimasi generik. (6) Field kartu KPI WAJIB RINGKAS: "value" hanya angka (mis. "Rp 747"), "delta" persen singkat (mis. "+2,6%"), "hint" tag pendek maksimal 8 karakter (mis. "YoY" atau "vs 2023") — JANGAN memasukkan kalimat atau penjelasan panjang ke field kartu; narasi mendalam hanya di "review". EKSTRAKSI SERI MULTI-TAHUN (WAJIB) untuk "financials": "labels" SAMA dengan revenueLabels. Semua "lines" dalam MILIAR Rupiah (mis. 5017 = Rp 5,017 triliun), selaras urutan labels; pakai null bila suatu tahun tak tersedia. "bars" dalam satuan alami: semua "%" KECUALI "dte" (Debt to Equity) yang dalam kali (angka desimal, mis. 0.84). "capex" = belanja modal/pembelian aset tetap per tahun (Miliar, angka POSITIF) untuk menghitung Free Cash Flow = kas_operasi − capex. Ekstrak "lines" dari Laporan Posisi Keuangan (neraca), Laporan Laba Rugi, dan Laporan Arus Kas; jangan mengarang — null bila benar-benar tak ada di dokumen. Keluarkan HANYA JSON, pastikan lengkap dan tertutup.\n${schema}`;
    const raw = await callClaude({ system: sys, messages: [{ role: "user", content: user }], max_tokens: 30000 });
    return extractJSON(raw);
  }

  async function analyzeFinanceReview({ company, contextText, periodLabel }) {
    const sys = "Anda adalah Analis Keuangan senior setara analis kredit/ekuitas kelas dunia yang menulis memo investasi institusional yang tajam, thesis-driven, dan berbasis bukti. Prioritaskan materialitas dan penalaran sebab-akibat (mengapa angka bergerak), bukan deskripsi. JANGAN PERNAH mengarang angka — gunakan hanya yang ada di dokumen; bila tak tersedia, nyatakan eksplisit. Bersikap KRITIS, SKEPTIS, dan OBYEKTIF layaknya analis forensik: tantang narasi manajemen, bedakan pertumbuhan organik dari yang bersifat one-off/kebijakan, dan nyatakan terus terang bila data mengkhawatirkan (mengutamakan kejujuran diagnostik di atas optimisme target). Keluarkan HANYA JSON valid (tanpa markdown, tanpa teks lain) sesuai skema. Narasi Bahasa Indonesia formal, desimal koma.";
    const schema = `{"review":[{"h":"1. Ikhtisar Kinerja & Konteks","b":"..."},{"h":"2. Pendapatan & Struktur Segmen","b":"..."},{"h":"3. Profitabilitas & Kualitas Laba","b":"..."},{"h":"4. Likuiditas & Solvabilitas","b":"..."},{"h":"5. Arus Kas & Belanja Modal","b":"..."},{"h":"6. Struktur Permodalan & Leverage","b":"..."},{"h":"7. Risiko & Sensitivitas","b":"..."},{"h":"8. Kesimpulan Analis","b":"..."}]}`;
    const user = `Perusahaan: ${company || "-"}\nPERIODE FOKUS: ${periodLabel || "-"}\n\nDOKUMEN:\n${(contextText || "").slice(0, 260000)}\n\nTulis ULASAN KEUANGAN MENDALAM setingkat memo analis kredit/ekuitas institusional untuk PERIODE FOKUS di atas — bukan ringkasan, bukan deskripsi. Standar WAJIB tiap seksi (2-4 paragraf padat): (a) THESIS-DRIVEN — mulai dari temuan paling material, nyatakan penilaian lalu buktikan dengan angka; (b) ANGKA SPESIFIK dari dokumen (nominal & rasio) dengan YoY/CAGR, disertai DEKOMPOSISI DRIVER — jelaskan MENGAPA angka bergerak (volume vs harga, segmen, struktur biaya, pos one-off), bukan sekadar naik/turun; (c) KUALITAS LABA — pisahkan laba operasi inti dari pos non-operasional/one-off, nilai konversi laba ke kas; (d) ARUS KAS & CAPEX — FCF, konversi kas, kebutuhan modal kerja, intensitas belanja modal; (e) SOLVABILITAS & LEVERAGE — lintasan utang, interest coverage, headroom kovenan; (f) KONTEKS STRATEGIS — kaitkan dengan transformasi/restrukturisasi/segmen bisnis bila disebut di dokumen; (g) RISIKO & SENSITIVITAS ke depan — apa yang bisa membatalkan tesis, sensitivitas terhadap suku bunga/permintaan/biaya; (h) IMPLIKASI KEPUTUSAN — tutup tiap seksi dengan “so what” bagi investor/kreditur. FORMAT KETERBACAAN (WAJIB): tulis body tiap seksi sebagai BEBERAPA paragraf pendek yang dipisah SATU BARIS KOSONG antar-paragraf — satu paragraf = satu poin analitis (maks 3-4 kalimat). Paragraf TERAKHIR tiap seksi diawali persis "Implikasi strategis:". Jangan menulis satu blok teks panjang. KETAJAMAN KRITIS (WAJIB, obyektif & forensik): tantang narasi manajemen; bedakan pendapatan organik dari yang bersifat one-off/kebijakan pemerintah; nilai KUALITAS LABA (divergensi net income vs EBITDA/arus kas, gap akrual) dan sebut bila rendah; ukur KONSENTRASI/ketergantungan pelanggan (mis. dominasi pendapatan pemerintah) sebagai risiko; identifikasi aset tersembunyi/undermonetized; kuantifikasi GAP terhadap target dengan CAGR yang diperlukan dan beri penilaian probabilitas pencapaian; bingkai risiko likuiditas/solvabilitas/kovenan secara eksistensial dengan rentang waktu; rekomendasikan tindakan forensik bila divergensi mencurigakan. Bila target tidak realistis atau angka mencurigakan, NYATAKAN dengan bukti — jangan memakai bahasa menenangkan yang tidak didukung data. Seksi Kesimpulan memberi verdict analis beserta syarat/kondisi. Bila suatu data tidak ada di dokumen, nyatakan eksplisit dan JANGAN mengarang. Keluarkan HANYA JSON sesuai skema, lengkap dan tertutup.\n${schema}`;
    const raw = await callClaude({ system: sys, messages: [{ role: "user", content: user }], max_tokens: 22000 });
    const obj = extractJSON(raw);
    return obj.review || obj;
  }

  // ---- Risk & Fraud analysis: returns object matching AgentRisk data shape ----
  async function analyzeRisk({ company, contextText }) {
    const sys = "Anda adalah investigator forensik & auditor fraud kelas dunia. Analisis dokumen perusahaan untuk inefisiensi, red flag kecurangan, indikasi modus, dan rekomendasi tindak lanjut forensik. Keluarkan HANYA JSON valid (tanpa markdown, tanpa teks lain) sesuai skema. Semua narasi Bahasa Indonesia (desimal koma). Jika data tak tersedia, nyatakan asumsi wajar.";
    const schema = `{
 "score":number(0-100, makin tinggi makin berisiko),
 "level":"low|moderate|high|critical",
 "mscore":{"year":"<tahun terakhir>","value":number,"verdict":"Terindikasi manipulasi|Zona abu-abu|Bersih","interpretation":"2-3 kalimat interpretasi hasil untuk tahun terakhir","formula":"M = -4,84 + 0,92·DSRI + 0,528·GMI + 0,404·AQI + 0,892·SGI + 0,115·DEPI - 0,172·SGAI + 4,679·TATA - 0,327·LVGI ; ambang: M > -1,78 => indikasi manipulasi laba, M < -2,22 => bersih","components":[{"k":"DSRI","label":"Days Sales in Receivables Index","value":number,"note":"1 kalimat"},{"k":"GMI","label":"Gross Margin Index","value":number,"note":"..."},{"k":"AQI","label":"Asset Quality Index","value":number,"note":"..."},{"k":"SGI","label":"Sales Growth Index","value":number,"note":"..."},{"k":"DEPI","label":"Depreciation Index","value":number,"note":"..."},{"k":"SGAI","label":"SG&A Index","value":number,"note":"..."},{"k":"TATA","label":"Total Accruals to Total Assets","value":number,"note":"..."},{"k":"LVGI","label":"Leverage Index","value":number,"note":"..."}]},
 "fscore":{"year":"<tahun terakhir>","value":integer(0-9),"verdict":"Kuat|Sedang|Lemah","interpretation":"2-3 kalimat interpretasi hasil","formula":"Jumlah 9 kriteria biner (0/1). Profitabilitas(4): ROA>0, CFO>0, ΔROA>0, CFO>Laba Bersih. Leverage/Likuiditas(3): leverage jangka panjang turun, Current Ratio naik, tanpa penerbitan saham baru. Efisiensi(2): Gross Margin naik, Asset Turnover naik.","components":[{"k":"ROA positif","point":0,"note":"..."},{"k":"CFO positif","point":0,"note":"..."},{"k":"ROA meningkat (YoY)","point":0,"note":"..."},{"k":"CFO > Laba Bersih (kualitas akrual)","point":0,"note":"..."},{"k":"Leverage jangka panjang turun","point":0,"note":"..."},{"k":"Current Ratio naik","point":0,"note":"..."},{"k":"Tanpa penerbitan saham baru","point":0,"note":"..."},{"k":"Gross Margin naik","point":0,"note":"..."},{"k":"Asset Turnover naik","point":0,"note":"..."}]},
 "flags":[{"title":"...","level":"low|moderate|high|critical","area":"mis. Piutang","modus":"istilah modus fraud (mis. Fictitious revenue)","detail":"2-3 kalimat menjelaskan temuan secara utuh","evidence":"bukti spesifik dari dokumen dengan angka/rasio/tren yang memicu kecurigaan","implication":"konsekuensi bila dibiarkan (dampak finansial, hukum/OJK, reputasi)","action":"call-to-action tindak lanjut forensik yang KONKRET & tegas (langkah, dokumen yang diminta, pihak yang diperiksa)","impact":1-5,"likelihood":1-5}],
 "summary":"2-3 kalimat ringkasan postur risiko/fraud & temuan paling material",
 "recommendation":"1-2 kalimat rekomendasi tindak lanjut forensik"
}`;
    const user = `Perusahaan: ${company || "-"}\n\nDOKUMEN:\n${(contextText || "").slice(0, 260000)}\n\nHasilkan JSON sesuai skema. Isi 5-7 flags dengan tingkat bervariasi. Isi "summary" (2-3 kalimat ikhtisar). Untuk TIAP flag, field detail/evidence/implication/action harus tebal, konkret, dan menggugah tindakan (hindari kalimat umum). Pastikan impact & likelihood tiap flag konsisten dengan level-nya. HITUNG dua skor forensik dari laporan keuangan di dokumen untuk TAHUN TERAKHIR: (a) BENEISH M-SCORE — 8 komponen (DSRI, GMI, AQI, SGI, DEPI, SGAI, TATA, LVGI) membandingkan tahun terakhir vs tahun sebelumnya; (b) PIOTROSKI F-SCORE — 9 kriteria biner. Isi tiap komponen dengan nilai numerik + catatan singkat, tentukan verdict, dan tulis interpretasi hasil. Bila suatu komponen tak dapat dihitung karena data kurang, beri estimasi wajar dan sebutkan keterbatasannya di "note". Keluarkan HANYA JSON, pastikan lengkap dan tertutup.\n${schema}`;
    const raw = await callClaude({ system: sys, messages: [{ role: "user", content: user }], max_tokens: 16000 });
    return extractJSON(raw);
  }

  // ---- Transformation plan: returns object matching AgentTransform data shape ----
  async function analyzeTransform({ company, contextText, priorFindings }) {
    const sys = "Anda adalah partner konsultan strategi kelas dunia (tier McKinsey, BCG, Bain). Susun rencana transformasi 5 tahun yang tajam, berbasis bukti, dan dapat dieksekusi \u2014 yang secara langsung menjawab isu-isu temuan analisis keuangan & forensik, memanfaatkan peta persaingan, outlook makro/industri, dan benchmark sejawat. Keluarkan HANYA JSON valid (tanpa markdown, tanpa teks lain) sesuai skema. Narasi Bahasa Indonesia formal, desimal koma. JANGAN mengarang angka dari dokumen; untuk asumsi pasar/benchmark, tandai sebagai estimasi. Jaga fokus pada CORE BUSINESS & kompetensi inti perusahaan; hindari diversifikasi ke bisnis yang tidak relevan.";
    const yNow = new Date().getFullYear();
    const schema = `{
 "horizon":"${yNow} \u2013 ${yNow + 4}",
 "ambition":"tema/tujuan besar transformasi dalam SATU frasa SINGKAT (maks ~12 kata), tanpa deretan angka; detail metrik taruh di context/targets",
 "context":"2-3 kalimat: outlook makro & industri, posisi kompetitif, dan isu inti yang harus dijawab (mengacu temuan Keuangan & Risiko)",
 "pillars":[{"name":"nama pilar","icon":"lucide: gauge|cpu|leaf|trending-up|users|globe|shield|rocket|scale|coins","target":"target terukur mis. -320 bps COGS"}] (tepat 4 pilar),
 "quickWins":[{"title":"inisiatif quick-win","theme":"Keuangan|Operasional|Komersial|Human Capital|Hukum & Tata Kelola|Teknologi|ESG","impact":"dampak ringkas terukur","timeframe":"0-12 bulan"}] (3-5),
 "phases":[{"year":"${yNow}","title":"tema fase","kpi":"KPI utama fase","invest":"nilai investasi mis. Rp 180 M","initiatives":[{"name":"inisiatif unggulan","theme":"Keuangan|Operasional|Komersial|Human Capital|Hukum & Tata Kelola|Teknologi|ESG","desc":"1-2 kalimat apa & mengapa","impact_quant":"dampak kuantitatif finansial mis. +Rp X / -Y bps / +Z%","impact_other":"dampak non-finansial mis. NPS/waktu proses/emisi"}]}] (tepat 5 fase, tahun ${yNow}..${yNow + 4}, tiap fase 2-4 inisiatif),
 "targets":[{"year":"${yNow}","target":"sasaran utama tahun ini (1 kalimat terukur)"}] (tepat 5 tahun ${yNow}..${yNow + 4}),
 "scorecard":[{"perspective":"Keuangan|Pelanggan|Proses Internal|Pembelajaran & Pertumbuhan","kpi":"nama KPI ringkas","unit":"% | Rp M | x | hari | indeks","values":[number,number,number,number,number]}] (TOTAL MAKSIMUM 10 KPI tersebar di 4 perspektif; tiap KPI 5 nilai target ${yNow}..${yNow + 4}),
 "projection":{"labels":["${yNow}","${yNow + 1}","${yNow + 2}","${yNow + 3}","${yNow + 4}"],"pnl":[{"item":"Pendapatan","values":[num,num,num,num,num]},{"item":"Beban Usaha","values":[...]},{"item":"Laba Usaha","values":[...]},{"item":"Laba Bersih","values":[...]}],"balance":[{"item":"Total Aset","values":[...]},{"item":"Total Liabilitas","values":[...]},{"item":"Total Ekuitas","values":[...]}],"revenueBreakdown":[{"segment":"nama jenis usaha","values":[...]}]},
 "review":[{"h":"1. Outlook Makro & Industri","b":"..."},{"h":"2. Peta Persaingan & Benchmark","b":"..."},{"h":"3. Diagnosis Isu Inti (Keuangan & Risiko)","b":"..."},{"h":"4. Tesis & Arsitektur Transformasi","b":"..."},{"h":"5. Quick Wins (0-12 bulan)","b":"..."},{"h":"6. Inisiatif Jangka Menengah & Panjang","b":"..."},{"h":"7. Dampak Finansial & Penciptaan Nilai","b":"..."},{"h":"8. Tata Kelola Eksekusi & Risiko Pelaksanaan","b":"..."}]
}`;
    const user = `Perusahaan: ${company || "-"}\n\n${priorFindings ? "TEMUAN AGEN LAIN (rencana ini WAJIB menjawabnya):\n" + priorFindings + "\n\n" : ""}DOKUMEN:\n${(contextText || "").slice(0, 200000)}\n\nSusun RENCANA TRANSFORMASI 5 TAHUN setingkat partner McKinsey/BCG/Bain. WAJIB: (1) Rencana SECARA EKSPLISIT menjawab isu temuan analisis Keuangan & Risiko di atas (bila tersedia). (2) Sertakan QUICK WINS (0-12 bulan) di samping inisiatif jangka menengah (1-3 th) & panjang (3-5 th). (3) Tiap fase tahunan merinci INISIATIF UNGGULAN beserta DAMPAK KUANTITATIF finansial (angka/%/bps) DAN dampak metrik lainnya. (4) Inisiatif menyentuh berbagai TEMA relevan: Human Capital, Hukum & Tata Kelola, Teknologi, ESG, Operasional, Komersial, Keuangan. (5) Analisis mempertimbangkan PETA PERSAINGAN, OUTLOOK MAKRO & INDUSTRI, dan BENCHMARK sejawat. (6) Isi "targets": sasaran utama TIAP TAHUN. (7) Rancang "scorecard" BALANCED SCORECARD: MAKSIMUM 10 KPI total tersebar di 4 perspektif (Keuangan, Pelanggan, Proses Internal, Pembelajaran & Pertumbuhan), tiap KPI punya target per tahun (5 nilai numerik). (9) "ambition" HARUS SINGKAT — tema/tujuan besar saja (maks ~12 kata), BUKAN kalimat panjang berisi banyak angka; detail metrik letakkan di "context"/"targets". (10) Seluruh rencana FOKUS pada CORE BUSINESS perusahaan & penguatan kompetensi inti; hindari diversifikasi ke usaha yang jauh dari kompetensi inti. (8) Susun "projection" PROYEKSI KEUANGAN 5 TAHUN dalam MILIAR Rupiah yang MENCERMINKAN dampak rencana transformasi: Laba Rugi (Pendapatan, Beban Usaha, Laba Usaha, Laba Bersih), Neraca (Total Aset, Total Liabilitas, Total Ekuitas), dan rincian Pendapatan per jenis usaha ("revenueBreakdown", jumlahnya = Pendapatan). Proyeksi adalah estimasi berbasis tahun terakhir di dokumen + asumsi transformasi (bukan angka aktual dokumen). Untuk "review": tiap seksi thesis-driven, beberapa paragraf pendek dipisah satu baris kosong, paragraf terakhir diawali "Implikasi strategis:". Berbasis bukti; jangan mengarang angka dokumen (asumsi pasar tandai sebagai estimasi). Keluarkan HANYA JSON, lengkap dan tertutup.\n${schema}`;
    const raw = await callClaude({ system: sys, messages: [{ role: "user", content: user }], max_tokens: 32000 });
    return extractJSON(raw);
  }

  // ---- Data Primer auto-fill from documents / notes ----
  async function analyzePrimer({ company, contextText, website }) {
    const sys = "Anda mengekstrak Data Primer perusahaan dari dokumen. Keluarkan HANYA JSON valid (tanpa markdown). Bahasa Indonesia (angka format Indonesia, desimal koma & ribuan titik). Kosongkan (\"\") field yang tidak dapat ditemukan; jangan mengarang.";
    const schema = `{
 "company":"nama resmi perusahaan bila terbaca",
 "founded":"tahun berdiri, mis. 1994",
 "sector":"sektor industri (klasifikasi Bank Indonesia)",
 "bidang":"bidang usaha spesifik",
 "revenue":"revenue tahunan angka penuh tanpa Rp, mis. 4.820.000.000.000",
 "revenueDate":"periode revenue format YYYY-MM",
 "status":"salah satu: BUMN|Multinasional|Swasta Nasional|SME|UMKM"
}`;
    const parts = [];
    if (company) parts.push("Nama sementara: " + company);
    if (website) parts.push("Website: " + website);
    if (contextText) parts.push("DOKUMEN:\n" + contextText.slice(0, 130000));
    const user = parts.join("\n\n") + `\n\nEkstrak Data Primer sebagai JSON sesuai skema. Keluarkan HANYA JSON.\n${schema}`;
    const raw = await callClaude({ system: sys, messages: [{ role: "user", content: user }], max_tokens: 3000 });
    return extractJSON(raw);
  }

  // Konteks dokumen ADIL lintas-dokumen: tiap laporan menyumbang bagian DEPAN
  // (Ikhtisar Keuangan multi-tahun) + BELAKANG (laporan keuangan audited), agar
  // SEMUA tahun terwakili walau total dokumen jauh melebihi anggaran token.
  function buildContext(docs, budget) {
    docs = Array.isArray(docs) ? docs.filter(function (d) { return d && d.text; }) : [];
    budget = budget || 240000;
    if (!docs.length) return "";
    var per = Math.max(24000, Math.floor(budget / docs.length));
    var head = Math.floor(per * 0.6);
    var tail = per - head;
    return docs.map(function (d) {
      var tx = d.text || "";
      var body = tx.length <= per ? tx
        : (tx.slice(0, head) + "\n\n[…bagian tengah dokumen dipangkas untuk ringkas…]\n\n" + tx.slice(tx.length - tail));
      return "## " + (d.name || "Dokumen") + "\n" + body;
    }).join("\n\n");
  }

  window.STX_AI = { getKey, setKey, getModel, setModel, hasKey, parseFile, buildContext, chat, analyzeFinance, analyzeFinanceReview, analyzeRisk, analyzeTransform, analyzePrimer };
})();
