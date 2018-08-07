var path = require('path');
var Webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src', 'script', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,             
            {
              loader: "css-loader",
              options: { minimize: true, autoprefixer: false  }
            }, 
            'postcss-loader'
          ] 
        },
        {test: /\.jpg$/, use: 'url-loader?mimetype=image/jpg'},
        {test: /\.png$/, use: 'url-loader?mimetype=image/png'}
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true 
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
