const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  watch: false,
  entry: __dirname + '/webpack/main.js',
  output: {
    filename: '[name]-bundle.js',
    path: __dirname + '/src/assets/js/',
    publicPath: 'asserts'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  }
};
