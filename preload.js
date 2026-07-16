// STRATIX Console — preload (contextIsolation aman)
// Menjembatani renderer <-> main untuk fitur pemeriksaan pembaruan.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('stxUpdater', {
  check: () => ipcRenderer.invoke('stx-check-update'),
  restart: () => ipcRenderer.invoke('stx-restart-install'),
  onStatus: (cb) => {
    const handler = (_e, data) => { try { cb(data); } catch (e) {} };
    ipcRenderer.on('stx-update-status', handler);
    return () => ipcRenderer.removeListener('stx-update-status', handler);
  },
});
