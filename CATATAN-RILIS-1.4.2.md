# STRATIX v1.4.2 - Hotfix layar putih (panel interim)

## Masalah
Setelah v1.4.1, aplikasi menjadi layar putih tepat setelah agen keuangan dijalankan ulang pada kasus dengan dokumen interim. Penyebab: panel "Periode Interim Terkini" merujuk komponen desain (Card, CardHeader, Badge) tanpa mengambilnya dari namespace design system internal, sehingga terjadi ReferenceError saat panel pertama kali ter-render dan seluruh tampilan runtuh.

## Perbaikan
1. Panel kini mengambil komponen dari namespace design system dengan benar.
2. Ditambahkan pagar pengaman (error boundary) khusus panel: bila terjadi error apa pun pada panel di masa depan, hanya panelnya yang disembunyikan, aplikasi tetap berjalan.

## File yang berubah
1. app/index.html (perbaikan)
2. package.json (1.4.1 -> 1.4.2)
3. app/ai.js (TIDAK berubah dari 1.4.1; disertakan hanya untuk berjaga bila salinan sebelumnya tidak lengkap)

## Cara update
1. Salin ketiga file ke folder repo sesuai struktur (timpa yang lama).
2. GitHub Desktop: Commit ("v1.4.2 hotfix panel interim") lalu Push ke main.
3. Tunggu release otomatis; buka ulang aplikasi hingga versi menunjukkan 1.4.2.

## Setelah update
Hasil analisis BTN yang tadi sudah selesai TIDAK hilang; ia tersimpan di cache. Buka kembali kasusnya: tampilan akan pulih dan panel "Periode Interim Terkini - 1H26" langsung tampil dari hasil yang sudah ada, tanpa perlu re-run. Validasi: Babel 8/8 OK; simulasi render lulus untuk cache lama (tanpa panel, tanpa crash), hasil baru dengan interim (panel + kualitas laba + LTM tampil), interim null, dan interim minimal.
