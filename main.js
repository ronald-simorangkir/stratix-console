// STRATIX Console — Electron main process
// Membungkus renderer (app/index.html) sebagai aplikasi desktop Windows.
const { app, BrowserWindow, shell, Menu, dialog, ipcMain } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

// Instance tunggal — mencegah aplikasi terbuka dua kali.
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  let win = null;

  function createWindow() {
    win = new BrowserWindow({
      width: 1320,
      height: 860,
      minWidth: 1024,
      minHeight: 680,
      title: 'STRATIX Console',
      backgroundColor: '#0E2547',
      icon: path.join(__dirname, 'build', 'icon.ico'),
      show: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        spellcheck: false,
      },
    });

    Menu.setApplicationMenu(null);        // sembunyikan menu bar bawaan
    win.loadFile(path.join(__dirname, 'app', 'index.html'));
    win.once('ready-to-show', () => win.show());

    // Suntik versi build yang SEDANG berjalan ke renderer (app.getVersion()),
    // supaya UI bisa menampilkannya di footer dekat identitas pengguna.
    win.webContents.on('did-finish-load', () => {
      try {
        win.webContents.executeJavaScript(
          'window.__appVersion=' + JSON.stringify(app.getVersion()) + ';' +
          'try{document.dispatchEvent(new Event("stx-version"));}catch(e){}'
        ).catch(function(){});
      } catch (e) {}
    });

    // Buka tautan eksternal (http/https) di browser default, bukan di dalam app.
    win.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        shell.openExternal(url);
        return { action: 'deny' };
      }
      return { action: 'allow' };
    });

    // Cegah navigasi keluar dari aplikasi (jaga renderer tetap di file lokal).
    win.webContents.on('will-navigate', (e, url) => {
      if (!url.startsWith('file://')) {
        e.preventDefault();
        shell.openExternal(url);
      }
    });

    win.on('closed', () => { win = null; });
  }

  app.on('second-instance', () => {
    if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
  });

  // Cek & pasang pembaruan otomatis (hanya pada aplikasi terinstal, bukan mode dev).
  function setupAutoUpdate() {
    if (!app.isPackaged) return;
    try {
      autoUpdater.autoDownload = true;
      autoUpdater.on('update-downloaded', () => {
        dialog.showMessageBox(win, {
          type: 'info',
          buttons: ['Muat ulang & pasang', 'Nanti'],
          defaultId: 0,
          cancelId: 1,
          title: 'Pembaruan tersedia',
          message: 'Versi baru STRATIX Console telah diunduh.',
          detail: 'Muat ulang aplikasi sekarang untuk memasang pembaruan? Data Anda tetap tersimpan.',
        }).then((r) => { if (r.response === 0) autoUpdater.quitAndInstall(); }).catch(() => {});
      });
      autoUpdater.checkForUpdatesAndNotify().catch(() => {});
    } catch (e) { /* jangan pernah gagalkan startup karena update */ }
  }

  // Kirim status pembaruan ke renderer (untuk panel "Cek Pembaruan" di UI).
  function sendUpd(data) { try { if (win && win.webContents && !win.webContents.isDestroyed()) win.webContents.send('stx-update-status', data); } catch (e) {} }
  let updaterWired = false;
  function wireUpdaterEvents() {
    if (updaterWired) return; updaterWired = true;
    autoUpdater.on('checking-for-update', () => sendUpd({ state: 'checking' }));
    autoUpdater.on('update-available', (info) => sendUpd({ state: 'available', version: info && info.version }));
    autoUpdater.on('update-not-available', (info) => sendUpd({ state: 'uptodate', version: (info && info.version) || app.getVersion() }));
    autoUpdater.on('download-progress', (pr) => sendUpd({ state: 'downloading', percent: Math.round((pr && pr.percent) || 0) }));
    autoUpdater.on('update-downloaded', (info) => sendUpd({ state: 'downloaded', version: info && info.version }));
    autoUpdater.on('error', (err) => sendUpd({ state: 'error', error: String((err && err.message) || err) }));
  }

  // Pemeriksaan pembaruan manual dari UI.
  ipcMain.handle('stx-check-update', async () => {
    if (!app.isPackaged) return { ok: false, error: 'Pengecekan pembaruan hanya tersedia pada aplikasi terinstal (bukan mode pengembangan).' };
    try { autoUpdater.autoDownload = true; await autoUpdater.checkForUpdates(); return { ok: true }; }
    catch (e) { return { ok: false, error: String((e && e.message) || e) }; }
  });
  ipcMain.handle('stx-restart-install', () => { try { autoUpdater.quitAndInstall(); } catch (e) {} return { ok: true }; });

  app.whenReady().then(() => { createWindow(); wireUpdaterEvents(); setupAutoUpdate(); });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
