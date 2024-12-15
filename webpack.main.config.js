const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/initialize/loader.ts",
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "builddir"),
    filename: "lunarwolf-image-converter.js",
    clean: true,
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "renderer/converterapp.html", to: "applogic/converterapp.html" },
        { from: "app/initialize/close.ts", to: "applogic/close.js" },
        { from: "app/initialize/minimize.ts", to: "applogic/minimize.js" },
      ],
    }),
  ],
  externals: {
    electron: "commonjs2 electron",
  },
};
