// Renderer process initialization
console.log("Renderer process starting...");

if (window.api) {
  console.log("API exposed to the renderer process!");

  // Log API version
  console.log(`Using API version: ${window.api.version}`);

  // TODO: Add additional renderer-specific setup here
} else {
  console.error("API is not available. Ensure the preload script is working correctly.");
}

function initializeApp() {
  console.log("Initializing renderer-specific logic...");

  // TODO: Add your renderer-specific startup logic here

  console.log("Renderer process initialized.");
}

initializeApp();
