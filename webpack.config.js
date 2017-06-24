// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var libraryName = 'tweenage-dirtbag';
var outputFile = libraryName + '.js';

var config = {
  entry:  './src/tweenage-dirtbag.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: {
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
      modules: [
       "node_modules",
       path.resolve(__dirname, "src")
     ],
     extensions: [".js", ".json", ".jsx", ".css"],
  }
};

module.exports = config;
