import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import initializeMainProcess from "../main/process"; // Initialize main process logic

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

  // Event listeners for window controls
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

  mainWindow.on("closed", () => {
    mainWindow = null; // Dereference the window object
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
