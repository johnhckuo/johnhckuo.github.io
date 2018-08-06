var path = require('path');
var Webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'bundle.css'
});

module.exports = {
  entry: path.join(__dirname, 'src', 'script', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: extractPlugin.extract({ 
            fallback: 'style-loader',
            use: [ 
              { 
                loader: 'css-loader', 
                options: { importLoaders: 1, minimize: true } 
              }, 
              'postcss-loader'
            ]
          })  
        },
        {test: /\.jpg$/, use: 'url-loader?mimetype=image/jpg'},
        {test: /\.png$/, use: 'url-loader?mimetype=image/png'},
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    extractPlugin,
    autoprefixer,
    new UglifyJsPlugin()
  ]
};
