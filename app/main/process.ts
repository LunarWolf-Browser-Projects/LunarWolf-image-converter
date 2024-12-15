import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

export default function initializeMainProcess() {
  console.log("Initializing main process...");

  // Enable flags
  app.commandLine.appendSwitch("disable-site-isolation-trials");

  // Set application-level event listeners
  app.on("browser-window-created", (_, window) => {
    console.log("window was created with success.");

    // Handle window controls for the newly created window
    // Minimize, Maximize, Close actions
    ipcMain.on("window-minimize", () => {
      window.minimize();
    });

    ipcMain.on("window-maximize", () => {
      if (window.isMaximized()) {
        window.restore();
      } else {
        window.maximize();
      }
    });

    ipcMain.on("window-close", () => {
      window.close();
    });
  });

  console.log("Main process initialization complete.");
}
