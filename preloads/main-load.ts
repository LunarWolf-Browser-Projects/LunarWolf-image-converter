import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('window-minimize'),
  toggleMaximizeWindow: () => ipcRenderer.send('window-maximize'),
  closeWindow: () => ipcRenderer.send('window-close')
});

contextBridge.exposeInMainWorld("api", {
  version: "1.0.0",
  sendMessage: (message: string) => {
    console.log(message);
  },
});
