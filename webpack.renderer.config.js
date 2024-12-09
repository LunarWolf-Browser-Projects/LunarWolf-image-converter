const path = require("path");

module.exports = {
  mode: "development",
  entry: "./renderer/process.ts",
  target: "electron-renderer",
  output: {
    path: path.resolve(__dirname, "builddir/renderer"),
    filename: "renderer.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
