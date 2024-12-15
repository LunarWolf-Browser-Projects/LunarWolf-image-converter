import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import initializeMainProcess from "../main/process"; // Initialize main process logic
import { handleClose } from "./close";
import { handleMinimize } from "./minimize";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // This removes the default window frame
    webPreferences: {
      preload: path.resolve(__dirname, "../preloads/main-load.js"),
      contextIsolation: true,
      nodeIntegration: false, // Disable nodeIntegration for security
    },
  });

  mainWindow.loadFile(path.resolve(__dirname, "./applogic/converterapp.html"));

  // Pass the window instance to the handlers after it's created
  handleClose(mainWindow);
  handleMinimize(mainWindow);

  // Handle minimize and close events from the renderer
  ipcMain.on("minimize-window", () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on("close-window", () => {
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
