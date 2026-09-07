# STRATIX v1.4.1 - Rilis A: Interim Financials (Modul 1 + 2 + ChatDock)

## File yang berubah (salin ke folder repo dengan struktur yang sama)
1. app/ai.js
2. app/index.html
3. package.json (versi 1.4.0 -> 1.4.1)
4. SPEC-STRATIX-Interim-Financials.md (dokumen spesifikasi, baru)
5. CATATAN-RILIS-1.4.1.md (file ini)

## Yang baru
1. Taksonomi dokumen: dua jenis baru di Document Hub, yaitu "Laporan Keuangan Interim" dan "Publikasi/Disclosure OJK", dengan deteksi otomatis dari nama file (triwulan/interim/semester/Q1-Q4/1H/9M; publikasi/LCR/NSFR/leverage/KPMM). Analyst deck kini juga terdeteksi dari kata "analyst"/"investor". Jenis dapat dikoreksi manual seperti biasa.
2. Skema Agen Analis Keuangan: objek baru "interim" berisi label periode, periode pembanding same-period, status audit, basis entitas (konsolidasi vs bank only), metrik interim dengan delta same-period yoy, konstruksi LTM beserta rumusnya, dan dekomposisi kualitas laba (driver PPOP vs pelonggaran provisi vs one-off, plus perbandingan guidance vs realisasi).
3. Aturan keras komparabilitas di prompt Finance, Review, Risk, dan ChatDock: seri tahunan tetap murni FY (interim TIDAK dicampur ke seri, sehingga chart, CAGR, dan delta kartu KPI tetap valid); flow hanya same-period yoy; stock antar tanggal posisi; LTM = FY + interim berjalan - interim pembanding; computed metrics wajib mengungkap rumus (PPOP, CASA ratio, NPL/LAR coverage, CIR).
4. Skor forensik (Beneish/Dechow/Altman/Piotroski): basis tahun buku penuh atau LTM, dinyatakan eksplisit di field tahun; dilarang mencampur flow 6 bulan dengan 12 bulan; dokumen interim dipakai sebagai sinyal dini di red flags; catatan keterbatasan Altman untuk bank.
5. UI: panel baru "Periode Interim Terkini" di tab Ringkasan Agen Keuangan (muncul hanya bila ada dokumen interim), menampilkan badge status audit dan basis entitas, kartu metrik same-period yoy (hover = catatan/rumus), baris LTM, dan blok Kualitas Laba Interim. Label meta ulasan tidak lagi memaksa "(Audited)".

## Cara update
1. Salin kelima file ke folder repo stratix-console sesuai strukturnya (timpa yang lama).
2. GitHub Desktop: Commit ("v1.4.1 Rilis A interim financials") lalu Push ke main.
3. Workflow otomatis build dan publish release; aplikasi self-update.

## Wajib setelah update
Jalankan ulang agen pada kasus yang ingin memakai fitur baru, urutan: Finance -> Risk -> Transform. Field "interim" hanya terisi pada hasil re-run; hasil cache lama tetap terbuka normal (panel interim tidak muncul).

## Uji penerimaan (pakai dokumen BTN)
1. Upload: Laporan Tahunan 2025, AM Des-25, AM Jun-26, Long Form TW2-2026. Cek kolom Jenis di Document Hub: Long Form = Laporan Keuangan Interim; kedua AM = Presentasi Perusahaan.
2. Run Finance. Seri chart berakhir di FY2025 (1H26 TIDAK menjadi titik seri).
3. Panel "Periode Interim Terkini - 1H26" muncul: delta same-period (laba sekitar +40,8%, PPOP sekitar -22,8%, NII sekitar -8,0% vs 1H25), badge unaudited dan konsolidasi.
4. Blok Kualitas Laba Interim mengklasifikasikan pertumbuhan laba didorong pelonggaran provisi, dan menyebut CoC 0,7% vs guidance 1,0-1,2%.
5. Run Risk. Field tahun tiap skor menyebut basisnya (mis. "FY2025 (basis tahunan penuh)"), dan red flags memuat sinyal dini dari data interim (mis. tren LCR/NSFR antar kuartal).
6. ChatDock: tanya "berapa pertumbuhan laba terkini dan apa basisnya" - jawaban harus same-period yoy berlabel periode dan menyinggung kualitas laba.

## Belum termasuk (rilis berikutnya sesuai SPEC)
Rilis B: Sector Pack Perbankan (kartu KPI bank, prudential trend tracker per kuartal). Rilis C: Benchmark Peers. Rilis D: Agen Persiapan Eksekutif. Catatan: PDF export Finance belum memuat panel interim; menyusul di rilis B.
