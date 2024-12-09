import { app, BrowserWindow } from "electron";
import path from "path";
import initializeMainProcess from "../main/process"; // Initialize main process logic

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, "../preloads/main-load.js"),
      contextIsolation: true,
      nodeIntegration: false, // Disable nodeIntegration for security
    },
  });

  // Load the newtab.html for the homepage
  mainWindow.loadFile(path.resolve(__dirname, "./newtabpage/newtab.html"));
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
