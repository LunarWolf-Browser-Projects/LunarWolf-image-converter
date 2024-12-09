import { app } from "electron";

export default function initializeMainProcess() {
  console.log("Initializing main process...");

  // Enable Chromium flags
  app.commandLine.appendSwitch("disable-http-cache"); // Example: Disable HTTP cache
  app.commandLine.appendSwitch("disable-site-isolation-trials"); // Example: Disable site isolation

  // Set application-level event listeners
  app.on("browser-window-created", (_, window) => {
    console.log("A new browser window was created.");
    // TODO: Additional logic for new windows
  });

  console.log("Main process initialization complete.");
}
