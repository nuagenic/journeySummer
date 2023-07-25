const path = require("path");
const Dotenv = require("dotenv-webpack");

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
  plugins: [new Dotenv()],
};
