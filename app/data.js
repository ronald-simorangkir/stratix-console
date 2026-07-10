// STRATIX Console — mock data for the UI kit (fake, illustrative).
window.STX_DATA = {
  // Klasifikasi Sektor Ekonomi Bank Indonesia (disederhanakan)
  sectorsBI: [
    "Pertanian, Perburuan & Kehutanan",
    "Perikanan",
    "Pertambangan & Penggalian",
    "Industri Pengolahan",
    "Pengadaan Listrik, Gas & Air",
    "Konstruksi",
    "Perdagangan Besar & Eceran",
    "Penyediaan Akomodasi & Makan Minum",
    "Transportasi, Pergudangan & Komunikasi",
    "Perantara Keuangan (Jasa Keuangan)",
    "Real Estat & Jasa Persewaan",
    "Informasi & Komunikasi",
    "Jasa Pendidikan",
    "Jasa Kesehatan & Kegiatan Sosial",
    "Jasa Kemasyarakatan, Sosial & Budaya",
    "Jasa Perusahaan",
    "Lainnya",
  ],
  // Bidang usaha umum yang mudah dipahami
  bidangUsaha: [
    "Manufaktur & Produksi",
    "Perdagangan & Ritel",
    "Jasa Keuangan & Perbankan",
    "Teknologi & Digital",
    "Properti & Konstruksi",
    "Energi & Pertambangan",
    "Agribisnis & Pangan",
    "Transportasi & Logistik",
    "Kesehatan & Farmasi",
    "Pendidikan",
    "Pariwisata & Perhotelan",
    "Media & Industri Kreatif",
    "Telekomunikasi",
    "Barang Konsumen (FMCG)",
    "Otomotif & Komponen",
    "Energi Terbarukan",
    "Jasa Profesional",
    "Lainnya",
  ],

  cases: [],

  documents: [],

  agents: [
    { id: "finance", name: "Agen Analis Keuangan", icon: "line-chart", color: "#0E7C8B", bg: "var(--info-050)",
      desc: "Analisis komprehensif layaknya investor berpengalaman — likuiditas, profitabilitas, solvabilitas, arus kas, dan valuasi.",
      tag: "Analis Keuangan" },
    { id: "risk", name: "Agen Risiko & Fraud", icon: "shield-alert", color: "#C33A3A", bg: "var(--negative-050)",
      desc: "Mengidentifikasi inefisiensi, red flags fraud, indikasi modus kecurangan, dan rekomendasi tindak lanjut forensik.",
      tag: "Risiko & Fraud" },
    { id: "transform", name: "Agen Transformasi", icon: "git-branch", color: "#1D4270", bg: "rgba(29,66,112,0.08)",
      desc: "Menyusun rencana transformasi 5 tahun yang detail, selayaknya konsultan manajemen kelas dunia.",
      tag: "Transformasi" },
  ],

  // Finance agent result
  finance: {
    kpis: [
      { label: "Revenue FY2024", value: "Rp 4,82", unit: "T", delta: "+12,4%", hint: "YoY", icon: "trending-up" },
      { label: "EBITDA Margin", value: "18,3", unit: "%", delta: "+1,1%", hint: "vs FY23", icon: "percent" },
      { label: "Net Profit", value: "Rp 419", unit: "M", delta: "+8,7%", hint: "YoY", icon: "wallet" },
      { label: "Free Cash Flow", value: "Rp 512", unit: "M", delta: "-4,2%", hint: "YoY", icon: "waves" },
    ],
    revenueSeries: [3.6, 3.9, 4.0, 4.29, 4.82],
    revenueLabels: ["2020", "2021", "2022", "2023", "2024"],
    marginSeries: [14.2, 15.1, 16.8, 17.2, 18.3],
    ratios: [
      { r: "Current Ratio", v: "1,84×", b: "1,50×", s: "Baik" },
      { r: "Quick Ratio", v: "1,12×", b: "1,00×", s: "Baik" },
      { r: "Debt to Equity", v: "1,12×", b: "1,00×", s: "Waspada" },
      { r: "Interest Coverage", v: "3,20×", b: "2,50×", s: "Baik" },
      { r: "ROE", v: "14,6%", b: "12,0%", s: "Baik" },
      { r: "Inventory Turnover", v: "5,4×", b: "6,0×", s: "Waspada" },
    ],
    verdict: "Fundamental solid dengan pertumbuhan pendapatan konsisten. Perhatian pada rasio utang yang meningkat dan perputaran persediaan di bawah benchmark industri.",

    // Ulasan naratif (sudut pandang Analis Keuangan, layak print)
    reviewMeta: { period: "Tahun Buku 2024 (Audited)", basis: "Laporan Keuangan Konsolidasian", prepared: "Agen Analis Keuangan STRATIX" },
    review: [
      { h: "1. Ikhtisar Kinerja",
        b: "Sepanjang tahun buku 2024, perusahaan membukukan pendapatan Rp 4,82 triliun, tumbuh 12,4% dibanding tahun sebelumnya dan melanjutkan tren kenaikan lima tahun berturut-turut dengan CAGR 7,6%. Pertumbuhan ini didorong oleh pemulihan volume penjualan pada segmen inti serta penyesuaian harga jual. Marjin EBITDA menguat ke 18,3% dari 17,2%, mencerminkan disiplin biaya dan skala ekonomi yang mulai terbentuk. Dari perspektif analis keuangan, kualitas pertumbuhan tergolong sehat karena disertai perbaikan marjin, bukan semata ekspansi volume berbiaya tinggi." },
      { h: "2. Profitabilitas & Kualitas Laba",
        b: "Laba bersih mencapai Rp 419 miliar (marjin bersih 8,7%), naik 8,7% secara tahunan. Namun laju pertumbuhan laba bersih tertinggal dari pertumbuhan pendapatan, terutama akibat kenaikan beban bunga seiring bertambahnya utang. Return on Equity sebesar 14,6% berada di atas benchmark industri 12,0%, menandakan penggunaan modal yang efisien. Kualitas laba dinilai memadai: porsi laba yang berasal dari pos non-operasional relatif kecil, sehingga laba mencerminkan kinerja operasi inti." },
      { h: "3. Likuiditas & Solvabilitas",
        b: "Posisi likuiditas kuat dengan Current Ratio 1,84× dan Quick Ratio 1,12×, keduanya di atas benchmark. Perusahaan memiliki bantalan modal kerja yang cukup untuk menutup kewajiban jangka pendek tanpa tekanan. Di sisi solvabilitas, Interest Coverage 3,20× masih aman, tetapi Debt to Equity meningkat ke 1,12× (benchmark 1,00×). Tren peningkatan leverage perlu dicermati karena mempersempit ruang gerak apabila suku bunga naik atau arus kas operasi melemah." },
      { h: "4. Arus Kas & Kualitas Kas",
        b: "Free Cash Flow tercatat Rp 512 miliar, turun 4,2% meski laba naik. Penurunan ini bersumber dari peningkatan kebutuhan modal kerja — khususnya piutang dan persediaan — serta belanja modal yang lebih tinggi. Selisih yang melebar antara laba akrual dan kas yang dihasilkan menjadi perhatian analis: laba yang tumbuh idealnya diikuti konversi kas yang sepadan. Rasio konversi kas yang menurun mengindikasikan modal kerja mulai menahan kas perusahaan." },
      { h: "5. Efisiensi Modal Kerja",
        b: "Inventory Turnover 5,4× berada di bawah benchmark industri 6,0×, menandakan persediaan berputar lebih lambat dari standar. Kombinasi persediaan yang menumpuk dan piutang yang tumbuh lebih cepat dari penjualan menekan siklus konversi kas. Perbaikan manajemen persediaan dan kebijakan kredit pelanggan berpotensi melepaskan kas yang kini terikat di modal kerja." },
      { h: "6. Struktur Permodalan",
        b: "Struktur modal bergeser ke arah yang lebih agresif seiring pendanaan ekspansi melalui utang. Selama arus kas operasi tetap kuat dan Interest Coverage terjaga di atas 3×, tingkat leverage saat ini masih terkendali. Namun analis menyarankan pemantauan kovenan pinjaman dan penyusunan rencana penguatan permodalan agar fleksibilitas keuangan tidak tergerus pada siklus yang kurang menguntungkan." },
      { h: "7. Kesimpulan Analis",
        b: "Secara keseluruhan, kesehatan keuangan perusahaan tergolong solid dengan pertumbuhan pendapatan dan marjin yang konsisten serta likuiditas yang kuat. Fokus perbaikan sebaiknya diarahkan pada tiga hal: (i) mengembalikan konversi kas melalui efisiensi modal kerja, (ii) mengendalikan laju penambahan utang, dan (iii) memperbaiki perputaran persediaan agar sejalan dengan benchmark. Dengan eksekusi pada ketiga area tersebut, profil keuangan perusahaan berpeluang naik dari kategori 'Sehat' menuju 'Sangat Sehat'." },
    ],

    // Red flags & concern dari analisis keuangan (bukan fraud)
    concerns: [
      { title: "Rasio utang meningkat melewati benchmark", level: "warning", area: "Solvabilitas", metric: "DER 1,12× (bmk 1,00×)",
        nilai: "1,12×", benchmark: "1,00×", tren: "Memburuk",
        detail: "Debt to Equity naik dari 0,98× ke 1,12× akibat pendanaan ekspansi via utang. Interest Coverage turun ke 3,20×.",
        implication: "Fleksibilitas keuangan menyempit; risiko tekanan bila suku bunga naik atau arus kas melemah.",
        rekomendasi: "Susun rencana penguatan permodalan dan pantau kepatuhan kovenan; batasi penambahan utang baru." },
      { title: "Free Cash Flow menurun meski laba naik", level: "negative", area: "Arus Kas", metric: "FCF -4,2% YoY",
        nilai: "-4,2%", benchmark: "> 0%", tren: "Memburuk",
        detail: "Laba bersih tumbuh 8,7% namun FCF justru turun 4,2% karena kebutuhan modal kerja dan capex meningkat.",
        implication: "Kualitas laba perlu dicermati — pertumbuhan belum sepenuhnya terkonversi menjadi kas.",
        rekomendasi: "Perketat manajemen modal kerja dan tinjau prioritas belanja modal untuk memulihkan konversi kas." },
      { title: "Perputaran persediaan di bawah standar industri", level: "warning", area: "Modal Kerja", metric: "5,4× (bmk 6,0×)",
        nilai: "5,4×", benchmark: "6,0×", tren: "Stabil",
        detail: "Persediaan berputar lebih lambat dari benchmark, mengikat kas dan menaikkan risiko keusangan stok.",
        implication: "Siklus konversi kas memanjang; potensi penurunan nilai persediaan bila permintaan melemah.",
        rekomendasi: "Terapkan kebijakan persediaan berbasis permintaan dan identifikasi stok lambat untuk dilepas." },
      { title: "Piutang tumbuh lebih cepat dari penjualan", level: "warning", area: "Kualitas Pendapatan", metric: "AR +19% vs Sales +12%",
        nilai: "+19%", benchmark: "≤ +12%", tren: "Memburuk",
        detail: "Pertumbuhan piutang usaha melampaui pertumbuhan penjualan, indikasi pelonggaran kebijakan kredit.",
        implication: "Risiko piutang tak tertagih dan tekanan likuiditas bila kolektibilitas memburuk.",
        rekomendasi: "Tinjau kebijakan kredit dan perkuat penagihan; pantau aging piutang secara berkala." },
      { title: "Konsentrasi pada segmen tunggal", level: "info", area: "Diversifikasi", metric: "±68% pendapatan",
        nilai: "±68%", benchmark: "< 50%", tren: "Stabil",
        detail: "Mayoritas pendapatan bersumber dari satu segmen produk utama.",
        implication: "Sensitivitas tinggi terhadap siklus permintaan segmen tersebut; perlu diversifikasi bertahap.",
        rekomendasi: "Rancang peta diversifikasi pendapatan bertahap ke segmen atau pasar baru." },
    ],
  },

  // Risk & fraud result
  risk: {
    score: 64,
    level: "high",
    matrix: [
      // rows = dampak (tinggi→rendah), cols = kemungkinan (rendah→tinggi)
      ["moderate", "high", "high", "critical", "critical"],
      ["low", "moderate", "high", "high", "critical"],
      ["low", "moderate", "moderate", "high", "high"],
      ["low", "low", "moderate", "moderate", "high"],
      ["low", "low", "low", "moderate", "moderate"],
    ],
    flags: [
      { title: "Lonjakan piutang tak tertagih", level: "critical", area: "Piutang", detail: "Kenaikan 46% AR aging >90 hari tanpa penjelasan memadai; indikasi channel stuffing.", modus: "Fictitious revenue" },
      { title: "Transaksi pihak berelasi tak wajar", level: "high", area: "Related Party", detail: "Pembelian bahan baku 18% di atas harga pasar dari entitas terafiliasi.", modus: "Related-party abuse" },
      { title: "Gap rekonsiliasi kas", level: "high", area: "Kas & Bank", detail: "Selisih Rp 12,4 M antara buku besar dan rekening koran Q3.", modus: "Cash misappropriation" },
      { title: "Kapitalisasi beban berlebih", level: "moderate", area: "Aset Tetap", detail: "Beban pemeliharaan dikapitalisasi untuk memoles laba.", modus: "Improper capitalization" },
    ],
    recommendation: "Direkomendasikan audit forensik lanjutan pada siklus pendapatan dan transaksi pihak berelasi, disertai konfirmasi pihak ketiga atas saldo piutang material.",
  },

  // Transformation roadmap
  transform: {
    horizon: "2025 – 2029",
    ambition: "Menjadi pemain manufaktur otomotif terintegrasi terdepan di Asia Tenggara dengan margin EBITDA 24% dan lini kendaraan listrik yang matang.",
    pillars: [
      { name: "Efisiensi Operasional", icon: "gauge", target: "-320 bps COGS" },
      { name: "Pertumbuhan Digital", icon: "cpu", target: "+Rp 1,4 T revenue baru" },
      { name: "Portofolio EV", icon: "battery-charging", target: "3 model EV" },
      { name: "Tata Kelola & ESG", icon: "leaf", target: "ESG rating A" },
    ],
    phases: [
      { year: "2025", title: "Stabilisasi & Fondasi", items: ["Konsolidasi struktur biaya", "Perbaikan tata kelola piutang", "Audit forensik selesai"], invest: "Rp 180 M" },
      { year: "2026", title: "Optimasi Inti", items: ["Otomasi 2 lini produksi", "Integrasi ERP terpadu", "Program lean manufacturing"], invest: "Rp 420 M" },
      { year: "2027", title: "Ekspansi Digital", items: ["Kanal penjualan D2C", "Platform after-sales digital", "Kemitraan fintech pembiayaan"], invest: "Rp 610 M" },
      { year: "2028", title: "Diversifikasi EV", items: ["Peluncuran 2 model EV", "Kemitraan baterai", "Jaringan charging pilot"], invest: "Rp 980 M" },
      { year: "2029", title: "Kepemimpinan Pasar", items: ["Ekspansi regional ASEAN", "Model EV ke-3", "Target EBITDA 24%"], invest: "Rp 1,2 T" },
    ],
  },
};

/* ---------- Case Demo (data ilustrasi lengkap untuk promo/onboarding) ---------- */
(function () {
  var D = window.STX_DATA; if (!D) return;
  var years = ["2020", "2021", "2022", "2023", "2024"];
  var demoFinancials = {
    labels: years,
    lines: {
      pendapatan: [3600, 3900, 4000, 4290, 4820],
      laba_kotor: [900, 980, 1032, 1120, 1292],
      beban_usaha: [560, 600, 612, 650, 722],
      laba_usaha: [340, 380, 420, 470, 570],
      laba_bersih: [250, 300, 332, 386, 419],
      ebitda: [511, 589, 672, 738, 882],
      total_aset: [5200, 5600, 5900, 6400, 7100],
      aset_lancar: [2100, 2250, 2400, 2600, 2900],
      aset_tidak_lancar: [3100, 3350, 3500, 3800, 4200],
      total_liabilitas: [2600, 2800, 3000, 3350, 3750],
      liabilitas_pendek: [1400, 1500, 1600, 1750, 1950],
      liabilitas_panjang: [1200, 1300, 1400, 1600, 1800],
      kas_operasi: [420, 470, 520, 560, 610],
      kas_investasi: [-280, -320, -360, -410, -520],
      kas_pendanaan: [-90, -110, -130, -150, -98]
    },
    bars: {
      gross_margin: [25.0, 25.1, 25.8, 26.1, 26.8],
      ebitda_margin: [14.2, 15.1, 16.8, 17.2, 18.3],
      net_profit_margin: [6.9, 7.7, 8.3, 9.0, 8.7],
      roe: [11.2, 12.1, 13.0, 13.8, 14.6],
      roa: [4.8, 5.4, 5.6, 6.0, 5.9],
      dte: [0.98, 1.02, 1.05, 1.08, 1.12],
      rev_growth: [null, 8.3, 2.6, 7.3, 12.4],
      ebitda_growth: [null, 15.3, 14.1, 9.8, 19.5]
    },
    capex: [300, 340, 380, 430, 540],
    ebitda: [511, 589, 672, 738, 882]
  };
  var demoFinance = Object.assign({}, D.finance, { healthScore: 82, healthLabel: "Sehat", financials: demoFinancials });

  /* ===== RISK & FRAUD — komprehensif ===== */
  var demoRisk = {
    score: 64, level: "high",
    summary: "Analisis forensik atas laporan keuangan 2024 mengidentifikasi 7 temuan red flag dengan komposit risiko tinggi. Perhatian utama terpusat pada siklus pendapatan (pengakuan pendapatan dan piutang) serta transaksi dengan pihak berelasi. Skor Beneish M-Score dan Altman Z-Score masih pada zona yang dapat dikelola, namun Dechow F-Score berada pada wilayah substansial sehingga menuntut prosedur audit yang diperluas. Secara keseluruhan, perusahaan belum menunjukkan indikasi manipulasi sistemik, tetapi terdapat kelemahan pengendalian internal yang berpotensi dieksploitasi bila tidak segera diperbaiki.",
    recommendation: "Direkomendasikan audit forensik terarah pada siklus pendapatan dan transaksi pihak berelasi untuk tahun buku 2023-2024, disertai konfirmasi pihak ketiga atas saldo piutang material dan rekonsiliasi kas Q3. Perkuat pemisahan fungsi (segregation of duties) pada proses pengadaan, terapkan kebijakan kapitalisasi beban yang lebih ketat, dan bentuk komite pemantau transaksi afiliasi yang melapor langsung ke Dewan Komisaris.",
    mscore: {
      value: -2.48, verdict: "Bersih", year: "2024",
      interpretation: "M-Score -2,48 berada di bawah ambang -1,78, menandakan probabilitas manipulasi laba yang rendah. Meski demikian, indeks DSRI (piutang) dan SGI (pertumbuhan penjualan) sedikit di atas normal, sehingga siklus pendapatan tetap perlu dicermati.",
      formula: "M = -4,84 + 0,920 DSRI + 0,528 GMI + 0,404 AQI + 0,892 SGI + 0,115 DEPI - 0,172 SGAI + 4,679 TATA - 0,327 LVGI",
      components: [
        { k: "DSRI", label: "Days Sales in Receivables", value: "1,19", note: "piutang tumbuh lebih cepat dari penjualan" },
        { k: "GMI", label: "Gross Margin Index", value: "0,97", note: "marjin membaik (normal)" },
        { k: "AQI", label: "Asset Quality Index", value: "1,04", note: "kualitas aset stabil" },
        { k: "SGI", label: "Sales Growth Index", value: "1,12", note: "pertumbuhan penjualan 12,4%" },
        { k: "TATA", label: "Total Accruals to Total Assets", value: "0,031", note: "akrual moderat" }
      ]
    },
    dechow: {
      value: 1.42, verdict: "Substansial", year: "2024",
      interpretation: "Dechow F-Score 1,42 menempatkan perusahaan pada zona risiko substansial (di atas 1,00), terutama didorong oleh perubahan akrual dan pertumbuhan piutang. Ini bukan bukti kecurangan, melainkan sinyal agar kualitas akrual dan pengakuan pendapatan divalidasi lebih dalam.",
      formula: "F = -7,893 + 0,790 RSST-accruals + 2,518 dRec + 1,191 dInv + 1,979 %SoftAssets + 0,171 dCashSales - 0,932 dROA + 1,029 Issuance",
      components: [
        { k: "Perubahan piutang (dRec)", value: "+19%", note: "melampaui pertumbuhan penjualan" },
        { k: "Soft assets ratio", value: "0,58", note: "porsi aset non-kas cukup tinggi" },
        { k: "Perubahan ROA (dROA)", value: "-0,4 pp", note: "profitabilitas aset sedikit turun" }
      ]
    },
    altman: {
      value: 2.10, verdict: "Abu-abu", year: "2024",
      interpretation: "Altman Z-Score 2,10 berada di zona abu-abu (1,81-2,99), mencerminkan solvabilitas yang belum sepenuhnya aman meski belum masuk kategori distress. Peningkatan leverage dan penurunan konversi kas menjadi penekan utama; penguatan modal kerja dapat mendorong skor ke zona aman.",
      formula: "Z = 1,2 X1 + 1,4 X2 + 3,3 X3 + 0,6 X4 + 1,0 X5",
      components: [
        { k: "X1", label: "Modal kerja / Total aset", value: "0,13" },
        { k: "X2", label: "Laba ditahan / Total aset", value: "0,21" },
        { k: "X3", label: "EBIT / Total aset", value: "0,08" },
        { k: "X4", label: "Nilai pasar ekuitas / Total liabilitas", value: "0,90" },
        { k: "X5", label: "Penjualan / Total aset", value: "0,68" }
      ]
    },
    fscore: {
      value: 6, verdict: "Sedang", year: "2024",
      interpretation: "Piotroski F-Score 6 dari 9 tergolong sedang-menuju-kuat: fundamental profitabilitas dan efisiensi operasi positif, namun tertahan oleh kenaikan leverage dan penurunan margin kotor tipis. Perbaikan pada struktur utang dan perputaran aset berpotensi menaikkan skor.",
      formula: "F = jumlah dari 9 kriteria biner (Profitabilitas 4 + Leverage/Likuiditas 3 + Efisiensi 2)",
      components: [
        { k: "ROA positif", point: 1 },
        { k: "Arus kas operasi positif", point: 1 },
        { k: "Kenaikan ROA", point: 0, note: "ROA sedikit turun" },
        { k: "Akrual < arus kas (kualitas laba)", point: 1 },
        { k: "Penurunan rasio utang jangka panjang", point: 0, note: "leverage naik" },
        { k: "Kenaikan current ratio", point: 1 },
        { k: "Tidak ada penerbitan saham baru", point: 1 },
        { k: "Kenaikan marjin kotor", point: 0, note: "marjin kotor relatif datar" },
        { k: "Kenaikan perputaran aset", point: 1 }
      ]
    },
    flags: [
      { title: "Lonjakan piutang tidak wajar disertai indikasi channel stuffing", level: "critical", area: "Siklus Pendapatan", modus: "Fictitious / premature revenue", impact: 5, likelihood: 4,
        detail: "Piutang usaha tumbuh 19% sementara penjualan hanya tumbuh 12,4%, dengan konsentrasi kenaikan pada saldo aging di atas 90 hari yang melonjak 46% pada kuartal keempat. Pola pengiriman yang menumpuk menjelang akhir periode pelaporan mengindikasikan kemungkinan pendorongan penjualan ke distributor (channel stuffing) untuk memenuhi target, bukan permintaan riil pasar.",
        modusDetail: "Pengakuan pendapatan dini atau fiktif melalui pengiriman ke pihak distributor terafiliasi tanpa perpindahan risiko dan manfaat yang sesungguhnya, sering disertai hak retur yang tidak diungkapkan memadai dalam catatan atas laporan keuangan.",
        evidence: "Rincian aging piutang (CALK hlm. 42) menunjukkan kenaikan bucket >90 hari dari Rp 180 M ke Rp 263 M; volume pengiriman Desember 2024 setara 31% penjualan tahunan.",
        implication: "Pendapatan dan laba 2024 berpotensi lebih tinggi dari kondisi ekonomi sesungguhnya; risiko pembalikan (reversal) dan penurunan nilai piutang pada 2025 cukup material.",
        action: "Lakukan konfirmasi pihak ketiga atas 20 saldo piutang terbesar dan uji cut-off pengiriman 10 hari sebelum dan sesudah akhir tahun; tinjau perjanjian distribusi untuk klausul hak retur." },
      { title: "Transaksi pembelian dengan pihak berelasi di atas harga pasar", level: "high", area: "Transaksi Afiliasi", modus: "Related-party abuse", impact: 4, likelihood: 4,
        detail: "Pembelian bahan baku dari entitas terafiliasi tercatat rata-rata 18% di atas harga pasar pembanding untuk komoditas sejenis, dengan nilai transaksi setara 14% dari total beban pokok. Tidak ditemukan dokumentasi analisis kewajaran harga (arm's length) yang memadai atas transaksi tersebut.",
        modusDetail: "Pengalihan nilai (value shifting) ke pihak terafiliasi melalui penetapan harga yang tidak wajar, yang dapat menggerus laba entitas dan merugikan pemegang saham minoritas serta kreditur.",
        evidence: "CALK transaksi pihak berelasi (hlm. 55) mencatat pembelian Rp 640 M; harga pembanding pasar berdasarkan indeks komoditas 15-20% lebih rendah.",
        implication: "Laba yang dilaporkan understated pada entitas dan overstated pada afiliasi; potensi pelanggaran ketentuan transaksi afiliasi dan tata kelola.",
        action: "Bentuk kajian transfer pricing independen dan wajibkan persetujuan Komite Audit untuk seluruh transaksi afiliasi material sebelum eksekusi." },
      { title: "Selisih rekonsiliasi kas yang belum terjelaskan pada Q3", level: "high", area: "Kas & Setara Kas", modus: "Cash misappropriation", impact: 4, likelihood: 3,
        detail: "Terdapat selisih Rp 12,4 miliar antara saldo buku besar kas dan rekening koran pada penutupan kuartal ketiga yang baru terselesaikan sebagian pada kuartal berikutnya. Jurnal penyesuaian dilakukan secara manual tanpa dokumentasi pendukung yang lengkap.",
        modusDetail: "Potensi penyalahgunaan kas (misappropriation) yang ditutup melalui jurnal penyesuaian akhir periode, atau kelemahan proses rekonsiliasi yang memungkinkan kesalahan material tidak terdeteksi tepat waktu.",
        evidence: "Kertas kerja rekonsiliasi bank September 2024 memuat pos 'selisih dalam penelusuran' Rp 12,4 M; penyelesaian sebesar Rp 8,1 M baru tercatat Oktober.",
        implication: "Keandalan saldo kas dan pengendalian atas penerimaan/pengeluaran dana dipertanyakan; risiko fraud kas melekat bila kontrol tidak diperbaiki.",
        action: "Wajibkan rekonsiliasi bank harian dengan reviu berjenjang; telusuri seluruh jurnal manual atas kas di atas Rp 1 M sepanjang tahun." },
      { title: "Kapitalisasi beban pemeliharaan yang berlebihan", level: "moderate", area: "Aset Tetap", modus: "Improper capitalization", impact: 3, likelihood: 4,
        detail: "Sebagian beban pemeliharaan dan perbaikan rutin dikapitalisasi sebagai penambahan aset tetap, sehingga menahan beban keluar dari laporan laba rugi dan menaikkan laba periode berjalan. Kebijakan batas kapitalisasi tampak diterapkan secara tidak konsisten antarunit.",
        modusDetail: "Memoles laba (earnings management) dengan menggeser beban operasi menjadi belanja modal, yang menunda pengakuan beban melalui penyusutan bertahun-tahun.",
        evidence: "Penambahan aset tetap naik 26% YoY sementara kapasitas produksi relatif tetap; sampel 15 voucher kapitalisasi menunjukkan 4 di antaranya bersifat pemeliharaan.",
        implication: "Laba usaha overstated dan EBITDA terangkat secara artifisial; beban penyusutan masa depan meningkat.",
        action: "Terapkan ambang kapitalisasi yang seragam dan lakukan uji atas penambahan aset tetap material untuk memastikan memenuhi kriteria kapitalisasi." },
      { title: "Pengakuan pendapatan pada titik cut-off yang agresif", level: "moderate", area: "Siklus Pendapatan", modus: "Cut-off manipulation", impact: 3, likelihood: 3,
        detail: "Sejumlah faktur bertanggal akhir Desember dengan bukti pengiriman awal Januari mengindikasikan penarikan pendapatan ke periode berjalan. Nilai yang terpengaruh diperkirakan setara 1,3% pendapatan tahunan.",
        modusDetail: "Manipulasi pisah batas (cut-off) untuk memindahkan pendapatan periode berikutnya ke periode berjalan demi memenuhi target kinerja.",
        evidence: "Uji cut-off atas 25 transaksi menemukan 6 transaksi dengan tanggal pengiriman setelah tanggal neraca.",
        implication: "Pendapatan 2024 sedikit overstated; berdampak pada perbandingan pertumbuhan antarperiode.",
        action: "Perkuat kontrol pisah batas dengan pencocokan otomatis tanggal faktur dan bukti serah terima barang." },
      { title: "Pencadangan keusangan persediaan yang kurang memadai", level: "moderate", area: "Persediaan", modus: "Under-provisioning", impact: 3, likelihood: 2,
        detail: "Perputaran persediaan 5,4x berada di bawah benchmark industri 6,0x dengan proporsi stok berumur di atas 180 hari yang meningkat, namun cadangan penurunan nilai persediaan relatif datar dibanding tahun sebelumnya.",
        modusDetail: "Menahan beban dengan tidak mencadangkan penurunan nilai persediaan lambat/usang secara memadai, sehingga aset dan laba tampak lebih tinggi.",
        evidence: "Analisis umur persediaan menunjukkan 22% stok berumur >180 hari; rasio cadangan terhadap persediaan turun dari 3,1% ke 2,7%.",
        implication: "Nilai persediaan berpotensi overstated; risiko write-down pada periode mendatang.",
        action: "Lakukan penilaian keusangan berbasis umur dan permintaan, serta sesuaikan kebijakan pencadangan." },
      { title: "Kelemahan pemisahan fungsi pada proses pengadaan", level: "low", area: "Pengendalian Internal", modus: "Weak segregation of duties", impact: 2, likelihood: 3,
        detail: "Fungsi permintaan, persetujuan, dan penerimaan barang pada beberapa unit dijalankan oleh personel yang sama, meningkatkan risiko penyalahgunaan dan pembelian fiktif. Belum terdapat rotasi tugas yang terstruktur.",
        modusDetail: "Peluang kolusi atau pembuatan pemasok/pembelian fiktif akibat lemahnya pemisahan tugas dan pengawasan berjenjang.",
        evidence: "Pemetaan otorisasi menunjukkan 3 unit dengan tumpang tindih peran kritikal pada siklus pengadaan.",
        implication: "Risiko fraud pengadaan meningkat meski dampak finansial per kejadian relatif terbatas.",
        action: "Terapkan matriks pemisahan fungsi dan kendali maker-checker pada persetujuan pembelian." }
    ]
  };

  /* ===== TRANSFORMASI — komprehensif ===== */
  var pyears = ["2025", "2026", "2027", "2028", "2029"];
  var demoScorecard = [
    { perspective: "Keuangan", kpi: "Marjin EBITDA", unit: "%", values: [18.3, 19.5, 20.8, 22.4, 24.0] },
    { perspective: "Keuangan", kpi: "Return on Equity (ROE)", unit: "%", values: [14.6, 15.8, 17.2, 18.6, 20.0] },
    { perspective: "Keuangan", kpi: "Arus Kas Bebas", unit: "Rp M", values: [512, 600, 720, 860, 1020] },
    { perspective: "Pelanggan", kpi: "Net Promoter Score", unit: "poin", values: [32, 38, 45, 52, 58] },
    { perspective: "Pelanggan", kpi: "Retensi Pelanggan", unit: "%", values: [84, 86, 88, 90, 92] },
    { perspective: "Pelanggan", kpi: "Pangsa Pasar Nasional", unit: "%", values: [11.2, 12.0, 13.1, 14.3, 15.5] },
    { perspective: "Proses Internal", kpi: "OEE Pabrik", unit: "%", values: [72, 76, 80, 84, 88] },
    { perspective: "Proses Internal", kpi: "Siklus Konversi Kas", unit: "hari", values: [78, 72, 66, 60, 54] },
    { perspective: "Proses Internal", kpi: "Tingkat Cacat (Defect)", unit: "ppm", values: [4200, 3400, 2600, 1800, 1000] },
    { perspective: "Pembelajaran & Pertumbuhan", kpi: "Karyawan Bersertifikat Digital", unit: "%", values: [22, 38, 55, 72, 88] },
    { perspective: "Pembelajaran & Pertumbuhan", kpi: "Skor Keterlibatan Karyawan", unit: "poin", values: [68, 72, 76, 80, 84] },
    { perspective: "Pembelajaran & Pertumbuhan", kpi: "Rasio Investasi R&D", unit: "% pdpt", values: [1.8, 2.2, 2.6, 3.0, 3.4] }
  ];
  var demoProjection = {
    labels: pyears,
    pnl: [
      { item: "Pendapatan", values: [4820, 5300, 5880, 6560, 7350], cagr: 11.1 },
      { item: "Laba Kotor", values: [1292, 1450, 1640, 1870, 2140], cagr: 13.5 },
      { item: "Laba Usaha", values: [570, 660, 780, 930, 1120], cagr: 18.4 },
      { item: "EBITDA", values: [882, 1010, 1180, 1400, 1665], cagr: 17.2 },
      { item: "Laba Bersih", values: [419, 500, 610, 740, 900], cagr: 21.0 }
    ],
    balance: [
      { item: "Total Aset", values: [7100, 7550, 8100, 8750, 9500], cagr: 7.5 },
      { item: "Total Liabilitas", values: [3750, 3850, 3950, 4050, 4150], cagr: 2.6 },
      { item: "Ekuitas", values: [3350, 3700, 4150, 4700, 5350], cagr: 12.4 },
      { item: "Kas & Setara Kas", values: [610, 720, 900, 1150, 1480], cagr: 24.8 }
    ],
    revenueBreakdown: [
      { item: "Komponen OEM", values: [3280, 3480, 3680, 3880, 4100], cagr: 5.7 },
      { item: "Aftermarket", values: [960, 1100, 1270, 1470, 1700], cagr: 15.4 },
      { item: "Ekspor Regional", values: [520, 600, 700, 820, 960], cagr: 16.6 },
      { item: "Lini Komponen EV", values: [60, 120, 230, 390, 590], cagr: 77.0 }
    ]
  };
  var demoInnovation = {
    intro: "Empat inisiatif terobosan dipilih berdasarkan kesesuaian dengan kapabilitas inti manufaktur, potensi dampak terhadap marjin dan pertumbuhan, serta tingkat risiko eksekusi. Prioritas diberikan pada inisiatif yang memperkuat ketahanan arus kas dan membuka sumber pendapatan baru tanpa mengganggu bisnis inti.",
    ideas: [
      { title: "Platform D2C & Aftermarket Digital",
        benchmark: "Pemain otomotif regional yang membangun kanal direct-to-consumer mencatat kenaikan marjin aftermarket 6-9 poin dan data permintaan yang lebih akurat.",
        fit: "Memanfaatkan basis produk dan jaringan bengkel eksisting; kebutuhan investasi teknologi moderat dan dapat dijalankan bertahap.",
        impact: "Berpotensi menambah pendapatan aftermarket Rp 700-900 miliar dalam 5 tahun dengan marjin lebih tinggi dari segmen OEM.",
        risk: "Adopsi kanal digital oleh pelanggan tradisional lambat; perlu manajemen konflik kanal dengan distributor." },
      { title: "Lini Komponen Kendaraan Listrik (EV)",
        benchmark: "Transisi pemasok komponen menuju modul EV (thermal, power electronics, wiring) menjadi mesin pertumbuhan utama industri hingga 2030.",
        fit: "Selaras dengan kompetensi manufaktur presisi; memerlukan kemitraan teknologi dan investasi lini baru.",
        impact: "Membuka lini pendapatan baru dengan CAGR sangat tinggi (proyeksi Rp 60 M menjadi Rp 590 M) dan memperpanjang relevansi portofolio.",
        risk: "Belanja modal besar dan ketidakpastian ritme adopsi EV domestik; risiko teknologi dan rantai pasok baterai." },
      { title: "Predictive Maintenance berbasis IoT",
        benchmark: "Penerapan sensor dan analitik prediktif pada lini produksi menurunkan downtime tak terencana 20-35% dan biaya pemeliharaan 10-15%.",
        fit: "Langsung meningkatkan OEE dan efisiensi biaya inti; investasi relatif terjangkau dengan ROI cepat.",
        impact: "Mendukung target OEE 88% dan penurunan biaya operasi yang memperkuat marjin EBITDA.",
        risk: "Ketergantungan pada kualitas data dan kesiapan SDM; perlu integrasi dengan sistem ERP." },
      { title: "Kemitraan Pembiayaan Rantai Pasok (Supply Chain Financing)",
        benchmark: "Skema pembiayaan rantai pasok bersama bank mempercepat konversi kas dan menstabilkan pemasok tanpa membebani neraca.",
        fit: "Sinergis dengan ekosistem perbankan; memperkuat likuiditas dan hubungan pemasok.",
        impact: "Memperpendek siklus konversi kas menuju 54 hari dan memperkuat arus kas bebas.",
        risk: "Ketergantungan pada mitra pembiayaan dan disiplin manajemen modal kerja." }
    ]
  };
  var demoTargets = [
    { year: "2025", target: "Stabilisasi arus kas & tuntasnya audit forensik siklus pendapatan" },
    { year: "2026", target: "Otomasi 2 lini produksi & integrasi ERP terpadu" },
    { year: "2027", target: "Peluncuran kanal D2C aftermarket & program lean manufacturing" },
    { year: "2028", target: "Produksi awal lini komponen EV & ekspansi ekspor regional" },
    { year: "2029", target: "Marjin EBITDA 24% & pangsa pasar nasional 15,5%" }
  ];
  var demoQuickWins = [
    { title: "Rekonsiliasi kas harian berjenjang", theme: "Governance", impact: "Menutup celah pengendalian kas dalam 90 hari" },
    { title: "Program penagihan piutang >90 hari", theme: "Arus Kas", impact: "Melepas Rp 120-160 M kas yang terikat" },
    { title: "Standarisasi ambang kapitalisasi", theme: "Kualitas Laba", impact: "Meningkatkan keandalan laba usaha" },
    { title: "Optimasi persediaan lambat", theme: "Modal Kerja", impact: "Memperbaiki perputaran menuju 6,0x" }
  ];
  var demoReview = [
    { h: "1. Arah Strategis", b: "Rencana transformasi lima tahun bertumpu pada tiga tuas nilai: memulihkan konversi kas, memodernisasi operasi inti, dan membangun sumber pertumbuhan baru melalui digital dan elektrifikasi. Arah ini menyeimbangkan disiplin arus kas jangka pendek dengan ambisi pertumbuhan jangka menengah.\n\nImplikasi strategis: keberhasilan bergantung pada eksekusi tata kelola yang menutup temuan forensik lebih dulu, sebelum modal dialokasikan ke inisiatif ekspansi." },
    { h: "2. Ketahanan & Risiko", b: "Peningkatan leverage dan penurunan konversi kas menjadi kerentanan utama yang harus dijaga selama fase investasi EV. Skenario suku bunga tinggi dan perlambatan permintaan perlu diuji terhadap kovenan pinjaman.\n\nImplikasi strategis: pembangunan lini EV sebaiknya bertahap dan didanai sebagian melalui kemitraan agar tidak menekan neraca secara berlebihan." }
  ];
  var demoTransform = Object.assign({}, D.transform, {
    scorecard: demoScorecard,
    projection: demoProjection,
    innovation: demoInnovation,
    targets: demoTargets,
    quickWins: demoQuickWins,
    review: demoReview
  });

  var DEMO_LOGO = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzEnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyMxMjMyNTYnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyMwQTFCMzQnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgcng9JzIyJyBmaWxsPSd1cmwoI2cpJy8+PHJlY3QgeD0nMjknIHk9JzI3JyB3aWR0aD0nOScgaGVpZ2h0PSc0Nicgcng9JzIuNScgZmlsbD0nI2ZmZmZmZicvPjxyZWN0IHg9JzYyJyB5PScyNycgd2lkdGg9JzknIGhlaWdodD0nNDYnIHJ4PScyLjUnIGZpbGw9JyNmZmZmZmYnLz48cGF0aCBkPSdNMzMuNSAzMSBMNjYuNSA2OScgZmlsbD0nbm9uZScgc3Ryb2tlPScjMTJBM0I0JyBzdHJva2Utd2lkdGg9JzkuNScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+PGNpcmNsZSBjeD0nNzEnIGN5PScyOScgcj0nNi41JyBmaWxsPScjNkJEOEU0Jy8+PC9zdmc+";

  D.demoCase = {
    id: "Case-000-DEMO", seq: 0, ticker: "NSAT",
    company: "PT Nusantara Sejahtera Tbk", initials: "NSA", logoColor: "#0E7C8B", logo: DEMO_LOGO,
    sector: "Industri Pengolahan (Manufaktur)", bidang: "Manufaktur komponen otomotif",
    status: "Swasta Nasional", founded: "1998", website: "", revenue: "Rp 4,82 T", revenueDate: "2024-12",
    docText: [], updated: "contoh", updatedAt: Date.now(), agents: ["finance", "risk", "transform"],
    analysis: { finance: demoFinance, risk: demoRisk, transform: demoTransform },
    health: "Sehat", demo: true
  };
})();
