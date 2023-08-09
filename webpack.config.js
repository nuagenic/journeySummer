const path = require("path");
const Dotenv = require("dotenv-webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: "./js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new Dotenv(), new NodePolyfillPlugin()],
  externals: {
    net: "empty",
    tls: "empty",
    fs: "empty",
  },
  devtool: "source-map",
  // optimization: {
  //   minimize: false,
  // },
};
