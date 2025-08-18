const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/hw22-1.js"), 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), 
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/hw22-1.html"), 
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  optimization: {
    minimizer: [
      `...`, 
      new CssMinimizerPlugin(),
    ],
  },
  mode: "development", 
};