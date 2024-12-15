import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import initializeMainProcess from "../main/process"; // Initialize main process logic

// TODO: logic for the closing, minimizzing, and maximizing the window are coming soon.

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // Custom titlebar
    webPreferences: {
      preload: path.resolve(__dirname, "../preloads/main-load.js"),
      contextIsolation: true,
      nodeIntegration: false, // Disable nodeIntegration for security
    },
  });

  mainWindow.loadFile(path.resolve(__dirname, "./applogic/converterapp.html"));

  // Handle the minimize, maximize, and close events
  ipcMain.on("window-minimize", () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on("window-maximize", () => {
    if (mainWindow) {
      if (mainWindow.isMaximized()) {
        mainWindow.restore();
      } else {
        mainWindow.maximize();
      }
    }
  });

  ipcMain.on("window-close", () => {
    if (mainWindow) mainWindow.close();
  });
}

app.whenReady().then(() => {
  initializeMainProcess(); // Initialize the main process logic
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
