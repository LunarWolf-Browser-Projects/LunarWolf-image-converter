import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import initializeMainProcess from "../main/process"; // Initialize main process logic

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true, // Use the native operating system's title bar and frame
    webPreferences: {
      preload: path.resolve(__dirname, "../preloads/main-load.js"),
      contextIsolation: true,
      nodeIntegration: false, // Disable nodeIntegration for security
    },
  });

  mainWindow.loadFile(path.resolve(__dirname, "./view/converterapp.html"));

  // Remove the default menu
  Menu.setApplicationMenu(null);

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
