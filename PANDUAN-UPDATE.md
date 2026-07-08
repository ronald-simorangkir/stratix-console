# Panduan Auto-Update STRATIX Console (tanpa uninstall–reinstall)

Setelah disiapkan sekali, aplikasi akan **memeriksa & memasang pembaruan sendiri**
saat dibuka. Anda tidak perlu uninstall/reinstall, dan **tidak perlu bisa koding**.

Cara kerjanya: setiap ada perbaikan, versi baru diterbitkan ke halaman "Releases"
di GitHub Anda. Aplikasi yang sudah terinstal mendeteksi versi baru itu, mengunduhnya
di latar belakang, lalu menawarkan "Muat ulang & pasang". **Data Anda (case & hasil
analisis) tetap aman** karena tersimpan terpisah di perangkat.

---

## Bagian 1 — Persiapan sekali saja (± 15 menit)

### Langkah 1. Buat repository di GitHub
1. Masuk ke https://github.com → klik tombol hijau **New** (atau tanda **+** kanan atas → *New repository*).
2. **Repository name:** ketik `stratix-console` (nama bebas, tapi gunakan ini agar cocok dengan panduan).
3. Pilih **Public**. (Lihat catatan "Public vs Private" di bawah.)
4. Klik **Create repository**.

### Langkah 2. Unggah file aplikasi
Cara termudah tanpa aplikasi tambahan:
1. Di halaman repo yang baru dibuat, klik **uploading an existing file**.
2. Buka folder `stratix-app` di komputer Anda, pilih **semua isinya**, seret ke halaman GitHub.
   (Sertakan folder `app`, `build`, `.github`, serta `main.js` dan `package.json`.)
3. Tunggu unggahan selesai → klik **Commit changes**.

> Alternatif lebih nyaman untuk update berikutnya: pasang **GitHub Desktop**
> (https://desktop.github.com) — nanti cukup seret file baru, klik *Commit*, lalu *Push*.

### Langkah 3. Izinkan Actions menerbitkan rilis
1. Di repo → tab **Settings** → menu kiri **Actions** → **General**.
2. Gulir ke **Workflow permissions** → pilih **Read and write permissions** → **Save**.

### Langkah 4. Terbitkan versi pertama
1. Di repo → tab **Actions**.
2. Pilih workflow **release-windows** di kiri → klik **Run workflow** (kanan) → **Run workflow**.
3. Tunggu ± 3–5 menit sampai tanda centang hijau muncul.

### Langkah 5. Pasang aplikasi (sekali ini saja secara manual)
1. Di repo → klik **Releases** (kanan halaman utama repo).
2. Unduh berkas **STRATIX-Console-Setup-1.0.1.exe** → jalankan → pasang seperti biasa.

Selesai. Mulai sekarang, pembaruan berikutnya masuk otomatis.

---

## Bagian 2 — Alur update sehari-hari (setelah persiapan)

Setiap kali ada perbaikan/perubahan:

1. **Saya kirim Anda file baru** (lewat chat, seperti biasa). Saya sebutkan file mana yang berubah.
2. **Anda perbarui file itu di GitHub:**
   - *Lewat web:* buka repo → masuk ke file yang dituju → ikon pensil / atau **Add file → Upload files** → seret file baru → **Commit changes**.
   - *Lewat GitHub Desktop:* timpa file lama dengan yang baru di folder Anda → **Commit** → **Push**.
3. **Terbitkan:** tab **Actions** → **release-windows** → **Run workflow**.
4. **Buka aplikasi STRATIX Anda** → muncul tawaran "Muat ulang & pasang" → klik. Selesai.

Nomor versi saya naikkan tiap perubahan, jadi aplikasi tahu ada yang baru.

---

## Catatan penting

**Public vs Private repository.**
Repo publik membuat auto-update bekerja paling mulus **tanpa** kredensial tambahan.
Isi repo hanya kode antarmuka aplikasi — **tidak ada API key, tidak ada data
perusahaan** (keduanya tersimpan lokal di tiap perangkat pengguna, bukan di kode).
Jadi risikonya kecil. Bila kebijakan MCI mewajibkan repo **privat**, auto-update
tetap bisa tetapi perlu penyiapan token akses tambahan — beri tahu saya dan saya
pandukan.

**Peringatan "Unknown publisher" dari Windows.**
Tanpa sertifikat code-signing, Windows SmartScreen kadang menampilkan peringatan
saat pertama memasang/memperbarui. Update **tetap berjalan** — cukup pilih *More info →
Run anyway*. Sertifikat bisa ditambahkan kapan saja untuk menghilangkan peringatan ini.

**Data aman saat update.**
Case, dokumen, dan hasil analisis tersimpan di penyimpanan lokal perangkat (IndexedDB),
terpisah dari file aplikasi — jadi pembaruan tidak akan menghapusnya.
