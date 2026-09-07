# SPEC v2: STRATIX Interim Financials, Bank Pack & Executive Prep Update

Track versi: 1.2.x (bump patch per rilis)
Prinsip umum: perubahan skema hanya terisi setelah re-run agen (urutan: Finance -> Risk -> Transform). Semua kasus lama wajib re-run setelah update.

---

## Latar Belakang: Pembelajaran dari Sesi BTN (kasus referensi)

Use case nyata: persiapan interview Direktur Keuangan & Strategi BTN. Dokumen input: Analyst Meeting per 30 Jun 2026 (unaudited), Analyst Meeting per 31 Des 2025 (audited), Long Form Laporan Keuangan Triwulan 2 2026, Laporan Tahunan 2025, plus laporan interim dan deck resmi bank peers (Mandiri, BRI, BNI, BCA).

Kemampuan yang terbukti dibutuhkan dan HARUS direplikasi STRATIX:

1. Campuran periode dan basis: FY audited, 1H unaudited, kuartalan; ditambah dimensi entitas bank only vs konsolidasi.
2. Disiplin komparabilitas: pertumbuhan flow metric selalu same-period yoy (1H26 vs 1H25: NII -8,0%, PPOP -22,8%, laba +40,8%); tren NIM 1H26 3,5% vs 1H25 4,4% dengan FY25 4,2% sebagai konteks terpisah.
3. Computed metrics dari pos mentah, dengan formula diungkapkan: PPOP = laba sebelum pajak + provisi; LAR coverage = CKPN / nominal LAR; CASA ratio dan special mention dari rincian pos.
4. Dekomposisi kualitas laba: atribusi pertumbuhan laba ke mesin operasional (PPOP) vs pelonggaran provisi; perbandingan CoC realisasi vs guidance manajemen.
5. Tren prudensial QoQ terhadap arah, bukan hanya ambang: LCR 178,1% -> 142,6% dalam satu kuartal; NSFR 122,75% -> 114,71% dengan dekomposisi ASF vs RSF; leverage ratio 6,86% -> 6,59%. Prinsip: "kelola tren, bukan threshold".
6. Benchmarking peers pada periode yang sama (13+ rasio lintas 5 bank), dengan flag bank-only per angka.
7. Output persiapan eksekutif: tesis pemersatu, Q&A siap ucap, attack points + defense narrative.

Tujuan akhir: seluruh alur di atas dilakukan di STRATIX (ChatDock engine Anthropic), tanpa pindah ke chat Claude.

---

## Modul 1: Period & Basis Intelligence Layer

### 1.1 Klasifikasi dokumen (Document Hub)

Perluas taksonomi docType dengan:
- `interim_fs` (laporan keuangan interim / long form triwulanan: 1Q / 1H / 9M / bulanan)
- `analyst_presentation` (analyst meeting deck / investor presentation)
- `publikasi_ojk` (laporan publikasi triwulanan format OJK)
- `prudential_disclosure` (LCR / NSFR / leverage ratio / KPMM disclosure)
- `annual_report` (laporan tahunan naratif, dibedakan dari audited FS)
- `peer_document` (dokumen perusahaan pembanding; lihat Modul 5)

Auto-identify saat upload mengembalikan objek metadata:

```json
{
  "docType": "interim_fs",
  "entityName": "PT Bank Tabungan Negara (Persero) Tbk",
  "entityRole": "subject",            // subject | peer
  "period": {
    "periodType": "1H",               // FY | 9M | 1H | Q1..Q4 | M
    "fiscalYear": 2026,
    "endDate": "2026-06-30",
    "basis": "cumulative",            // cumulative | discrete
    "auditStatus": "unaudited",       // audited | limited_review | unaudited | deck | publikasi
    "entityBasis": "consolidated"     // consolidated | bank_only | parent_only
  }
}
```

### 1.2 Timeline kasus

Timeline periode dibangun dari seluruh dokumen subject, dipakai semua agen dan ChatDock. Tampilkan strip periode di dashboard Finance: badge per periode, warna beda untuk audited vs unaudited, ikon beda untuk konsolidasi vs bank only.

### 1.3 Aturan flow vs stock

- P&L dan arus kas = FLOW (kumulatif). Tidak boleh dibandingkan lintas panjang periode berbeda.
- Neraca = STOCK (point-in-time). Boleh dibandingkan antar tanggal.
- Rasio campuran (ROA, ROE) pada periode interim: pembilang LTM atau anualisasi ber-flag, penyebut rata-rata.
- Angka konsolidasi tidak boleh dicampur bank only dalam satu perbandingan tanpa flag eksplisit.

---

## Modul 2: Comparability & Computed Metrics Engine

Aturan keras (enforced di kode, bukan hanya prompt):

1. Pertumbuhan flow metric: hanya same-period yoy. Dilarang 1H vs FY.
2. Derivasi kuartal diskrit: Q2 = 1H - Q1; Q4 = FY - 9M; label "(derived)".
3. Konstruksi LTM: LTM per 1H26 = FY25 + 1H26 - 1H25; label "LTM Jun-26". Otomatis bila komponen tersedia.
4. Anualisasi hanya fallback; flag "annualized, belum memperhitungkan musiman".
5. Computed metrics layer: metrik yang tidak tersaji eksplisit dihitung dari pos mentah dengan formula tersimpan dan ditampilkan (tooltip + PDF). Daftar awal (bank): PPOP, CASA ratio, LAR, LAR coverage, NPL coverage, cost of credit, CIR, cost of fund. Generik: EBITDA, FCF, net trade cycle. Setiap computed metric membawa atribut `source: "computed"` + `formula`.
6. Skor forensik (Beneish M, Piotroski F, Altman Z, Dechow F): basis LTM. Bila LTM tidak dapat dibentuk, kartu disabled dengan keterangan "memerlukan FY + periode interim pembanding". Basis perhitungan selalu di tooltip dan PDF.
7. Chart MultiChart: label periode campuran (FY23..FY25, 1H26, LTM Jun-26). Series flow tidak mencampur panjang periode; toggle "Tahunan + LTM" vs "Per Periode Pelaporan".
8. Pelanggaran komparabilitas yang terdeteksi dari dokumen (mis. deck membandingkan 1H vs FY) otomatis masuk Red Flags kategori "penyajian".

### 2.9 Dekomposisi kualitas laba (baru)

Untuk setiap periode pelaporan terbaru, hitung dan tampilkan bridge atribusi pertumbuhan laba:
- Delta laba = delta PPOP - delta provisi - delta pajak (+/- pos non-recurring teridentifikasi).
- Klasifikasi otomatis: "pertumbuhan berkualitas" (didorong PPOP) vs "pertumbuhan dari pelonggaran provisi / one-off".
- Bila dokumen memuat guidance manajemen (CoC, NIM, loan growth, dll), bangun tabel guidance vs realisasi dan flag deviasi (realisasi di bawah guidance CoC = potensi under-provisioning, masuk Red Flags).
- Output ini menjadi input prioritas bagi Agen Risiko dan Agen Persiapan Eksekutif.

---

## Modul 3: Sector Pack Perbankan

### 3.1 Deteksi sektor

Field `sector` level kasus, auto dari dokumen, dapat dioverride. Nilai awal: `general` | `bank`. Arsitektur terbuka untuk pack berikutnya (insurance, multifinance).

### 3.2 Perilaku saat sector = bank

- Kartu KPI paket bank: NIM, CIR, LDR, CASA ratio, cost of fund, NPL gross/net, special mention, LAR, NPL coverage, LAR coverage, Cost of Credit, CAR/KPMM, LCR, NSFR, leverage ratio, ROA, ROE.
- Kartu Free Cash Flow dinonaktifkan.
- Dropdown line/bar chart memakai daftar metrik bank.
- Prompt Agen Analis Keuangan mendapat konteks perbankan: kualitas aset (NPL vs SM vs LAR vs coverage sebagai satu rantai), funding mix (CASA organik vs CASA kebijakan/wholesale/borrowings), repricing structure dan mismatch durasi, pembacaan LCR/NSFR/leverage terhadap ambang DAN arah tren.
- Altman Z disabled untuk bank (dengan keterangan); Beneish dan Piotroski tetap dengan catatan keterbatasan institusi keuangan.

### 3.3 Prudential trend tracker (baru)

- Rasio prudensial (LCR, NSFR, leverage, KPMM) disimpan per kuartal per basis entitas (individu vs konsolidasi).
- Panel tren: nilai terkini, ambang regulator, arah 4 kuartal terakhir, dan dekomposisi driver bila tersedia (ASF vs RSF untuk NSFR; HQLA vs net cash outflow untuk LCR).
- Aturan naratif untuk agen: kepatuhan hari ini bukan kesimpulan; tren menyempit yang konsisten adalah temuan.

---

## Modul 4: Agen Persiapan Eksekutif

Agen keempat, cross-agent (menerima priorFindings Finance + Risk, pola Agen Transformasi).

- Mode konteks: `interview_direksi` | `analyst_call` | `rups` | `rdp`.
- Field instruksi bebas untuk konteks spesifik (mis. profil yang dicari panel).
- Output:
  1. Tesis pemersatu: satu paragraf narasi sentral yang menyatukan seluruh temuan (pola BTN: dari penimbun neraca menjadi manajer aliran).
  2. Angka jangkar: 5-7 angka wajib kuasai, dengan label periode dan basis entitas.
  3. Q&A strategis 12-20 butir level direktur, dikelompokkan (kinerja & kualitas laba, kualitas aset/risiko, likuiditas & permodalan, pendanaan, strategi & transformasi, governance). Setiap jawaban mengutip angka berlabel periode yang benar.
  4. Anticipated attack points + defense narrative, bersumber dari dekomposisi kualitas laba (2.9), tren prudensial (3.3), dan Red Flags Agen Risiko.
  5. Pertanyaan balik yang layak diajukan.
- Ekspor: PDF (pola existing) dan HTML standalone dengan navigasi sidebar (pola pegangan BTN).
- Budget token: mulai 28000, sesuaikan setelah uji.

---

## Modul 5: Benchmark Peers (baru)

STRATIX saat ini satu perusahaan per kasus. Sesi BTN membutuhkan komparasi lintas bank pada periode sama. Solusi minimal-invasif:

- Dokumen dapat ditandai `entityRole: "peer"` dengan `entityName` masing-masing saat upload (auto-detect + override manual).
- Tab baru "Benchmark" di dashboard Finance: tabel rasio subject vs peers pada periode sama (same-period rule berlaku), dengan flag per angka bila basis berbeda (bank only vs konsolidasi) dan `source: computed` bila dihitung dari pos mentah.
- Baris pembacaan kunci digenerate agen: metrik mana yang subject terbaik/terburuk dan implikasinya.
- Batasan v1: maksimal 4 peers; hanya metrik yang tersedia di kedua sisi yang ditampilkan; tidak ada interpolasi.

---

## ChatDock (engine Anthropic)

- ChatDock menerima konteks ternormalisasi: timeline periode + basis entitas + computed metrics + hasil agen terakhir + potongan dokumen via buildContext(), bukan teks mentah saja.
- System prompt ChatDock memuat ringkasan aturan Modul 2 (same-period yoy, LTM, flow vs stock, flag basis entitas) agar jawaban percakapan konsisten dengan dashboard.
- Provider default Anthropic; model mengikuti Settings > Model AI.

---

## Urutan Rilis

1. Rilis A (satu paket): Modul 1 + Modul 2 (termasuk 2.9) + penyesuaian ChatDock. Perubahan skema besar; semua kasus wajib re-run.
2. Rilis B: Modul 3 (Sector Pack Perbankan + prudential trend tracker).
3. Rilis C: Modul 5 (Benchmark Peers).
4. Rilis D: Modul 4 (Agen Persiapan Eksekutif).

Catatan: Modul 4 dirilis terakhir agar mengonsumsi output 2.9, 3.3, dan 5 yang sudah stabil.

## Kriteria Uji (acceptance) - gunakan dokumen BTN sebagai data uji

1. Upload FY25 audited + AM 1H26 + long form TW2-2026: timeline menampilkan FY25 dan 1H26 dengan badge status dan basis entitas yang benar.
2. Pertumbuhan yang ditampilkan same-period yoy (laba +40,8%, PPOP -22,8%, NII -8,0% untuk 1H26 vs 1H25); dilarang muncul perbandingan 1H26 vs FY25 sebagai "pertumbuhan".
3. PPOP, LAR coverage, CASA ratio muncul sebagai computed metrics dengan formula di tooltip.
4. Dekomposisi kualitas laba mengklasifikasikan pertumbuhan laba 1H26 sebagai didorong pelonggaran provisi, dan CoC 0,7% vs guidance 1,0-1,2% muncul sebagai flag.
5. Prudential trend tracker menampilkan LCR/NSFR/leverage per kuartal per basis (individu vs konsolidasi) dengan arah tren, termasuk dekomposisi ASF vs RSF.
6. Sector = bank: paket KPI bank aktif, FCF hilang, Altman Z disabled dengan keterangan.
7. Dengan dokumen peers diunggah sebagai peer: tab Benchmark menampilkan tabel 1H26 lintas bank dengan flag bank-only per angka.
8. ChatDock menjawab "berapa pertumbuhan laba terkini dan apa basisnya" dengan jawaban same-period yoy berlabel periode dan menyebut kualitas labanya.
9. Agen Persiapan Eksekutif menghasilkan tesis pemersatu + Q&A + attack points yang seluruh angkanya berlabel periode dan basis yang benar.
