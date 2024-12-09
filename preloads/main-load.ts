import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
  version: "1.0.0",
  sendMessage: (message: string) => {
    console.log(message);
  },
});
