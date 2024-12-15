import { BrowserWindow, ipcMain } from 'electron';

export function handleClose(window: BrowserWindow) {
  ipcMain.on('close-window', () => {
    if (window) {
      window.close();
    }
  });
}
