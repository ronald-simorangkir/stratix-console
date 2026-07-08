# STRATIX Console — Build Aplikasi Windows

Proyek ini **siap-build**. Aplikasi STRATIX Console (sudah fungsional, termasuk
integrasi Claude sungguhan) telah dibungkus sebagai aplikasi desktop Electron.
Anda tinggal menginstal dependensi dan menjalankan satu perintah untuk menghasilkan
installer `.exe`.

---

## Isi paket

```
stratix-app/
├─ main.js                     ← proses utama Electron (jendela, ikon, menu, tautan eksternal)
├─ package.json                ← konfigurasi build electron-builder (target NSIS)
├─ build/
│  ├─ icon.ico                 ← ikon aplikasi (256→16px, tile navy bermerek STRATIX)
│  └─ icon.png                 ← master 1024px (untuk Tauri / listing bila perlu)
├─ app/                        ← renderer (UI aplikasi)
│  ├─ index.html               ← entry — memuat pustaka lokal + design system + layar
│  ├─ ai.js                    ← integrasi Claude + parsing dokumen (model default: claude-sonnet-5)
│  ├─ data.js                  ← data awal
│  ├─ *.jsx                    ← layar: landing, library, workspace, agents, chat, settings
│  ├─ styles.css + tokens/     ← design system (navy #0E2547 + teal)
│  ├─ _ds_bundle.js            ← komponen design system terkompilasi
│  ├─ assets/                  ← logo STRATIX
│  └─ vendor/                  ← React, ReactDOM, Babel, Lucide (LOKAL — UI jalan offline)
├─ .github/workflows/build.yml ← build otomatis di GitHub Actions (opsional)
└─ .gitignore
```

**Perubahan yang sudah diterapkan dari paket handoff asli:**
- Pustaka React/Babel/Lucide di-*vendor* secara lokal → UI **tetap berjalan tanpa internet**
  (sebelumnya di-load dari CDN unpkg saat runtime).
- String model diperbarui: `claude-sonnet-4-5` (usang) → **`claude-sonnet-5`** (ID kanonik terbaru).

---

## Prasyarat

- **Windows 10/11 (x64)**
- **Node.js LTS** (v20) — https://nodejs.org

Tidak perlu Rust atau toolchain lain (itu hanya untuk jalur Tauri).

---

## Jalur A — Build lokal (paling langsung)

```powershell
cd stratix-app
npm install          # sekali saja; mengunduh Electron (~real download pertama agak besar)
npm start            # (opsional) tes: aplikasi harus terbuka
npm run dist         # buat installer
```

Installer akan berada di:

```
dist\STRATIX-Console-Setup-1.0.0.exe
```

Installer NSIS ini: dapat memilih folder instalasi, membuat shortcut Desktop &
Start Menu, dan install **per-user** (tidak butuh hak administrator). Untuk
deploy korporat per-mesin, ubah `"perMachine": false` → `true` di `package.json`
(bagian `build.nsis`).

---

## Jalur B — Build via GitHub Actions (tanpa PC Windows)

1. Push folder ini ke sebuah repo GitHub.
2. Buat tag rilis:
   ```bash
   git tag v1.0.0 && git push --tags
   ```
3. Buka tab **Actions** → workflow `build-windows` berjalan di runner Windows →
   unduh installer dari **Artifacts**. (Bisa juga dijalankan manual via *Run workflow*.)

---

## Catatan penting

### 1. API Key & model
Aplikasi memanggil Anthropic langsung dari klien. Saat pertama dibuka, masuk ke
**Pengaturan → API Key**, tempel key `sk-ant-…`. Key disimpan lokal (localStorage).
Untuk mengganti model default, edit satu baris di `app/ai.js`:
```js
const DEFAULT_MODEL = "claude-sonnet-5";   // ganti mis. "claude-opus-4-8" untuk analisis berat
```

### 2. Apa yang butuh internet
- **UI**: tidak (semua pustaka lokal).
- **Analisis AI**: ya (memanggil `api.anthropic.com`).
- **Parsing dokumen** (PDF/XLSX/DOCX) & **webfont**: memuat pustaka dari CDN saat
  dipakai. Untuk offline penuh, pustaka ini perlu di-vendor juga — bisa dilakukan
  di iterasi berikutnya.

### 3. Governance — untuk pemakaian institusional
Pola saat ini (key di klien) aman untuk **single-user personal**. Bila aplikasi
akan menyentuh data portofolio MCI atau didistribusikan ke tim, arahkan panggilan
AI lewat **proxy backend** (key di server, bukan di perangkat pengguna). Ini
menghilangkan eksposur key dan memberi jejak audit terpusat.

### 4. Code signing (untuk distribusi luas)
Tanpa sertifikat, Windows SmartScreen menandai "Unknown publisher". Untuk rilis
resmi, sediakan **Code Signing Certificate** (idealnya EV) dan set `CSC_LINK` /
`CSC_KEY_PASSWORD` saat build.

### 5. Installer lebih kecil (opsional, Tauri)
Electron ≈ 60–90 MB. Bila ingin ≈ 3–8 MB, migrasikan ke Tauri (butuh Rust + C++
Build Tools). `build/icon.png` sudah tersedia sebagai sumber ikon Tauri.
