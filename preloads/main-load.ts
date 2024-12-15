import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('window-minimize'),
  toggleMaximizeWindow: () => ipcRenderer.send('window-maximize'),
  closeWindow: () => ipcRenderer.send('window-close')
});

contextBridge.exposeInMainWorld("api", {
  version: "0.0.2",
  sendMessage: (message: string) => {
    console.log(message);
  },
});
