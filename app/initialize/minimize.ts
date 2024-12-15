import { BrowserWindow, ipcMain } from 'electron';

export function handleMinimize(window: BrowserWindow) {
  ipcMain.on('minimize-window', () => {
    if (window) {
      window.minimize();
    }
  });
}
