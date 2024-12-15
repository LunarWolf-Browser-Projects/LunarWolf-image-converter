import { app, BrowserWindow, ipcMain } from "electron";

export default function initializeMainProcess() {
  console.log("Initializing main process...");

  // Enable flags
  app.commandLine.appendSwitch("disable-site-isolation-trials");

  // Set application-level event listeners
  app.on("browser-window-created", (_, window) => {
    console.log("window was created with sucess.");
    // TODO: Additional logic for new window
  });

  console.log("Main process initialization complete.");
}
