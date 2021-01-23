var path = require('path');
var webpack = require('webpack');
var fs = require("fs");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: './dist',
    //host: "demo.segmentify.com",
    //disableHostCheck: true,
    //https: true,
    //key: fs.readFileSync('./host.key'),
    //cert: fs.readFileSync('./host.cert')
  },
  entry: './app.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'segmentify.js'
  },
  module: {
      rules: [
        // {
        //   test: /\.worker\.(c|m)?js$/i,
        //   loader: "worker-loader"
        // },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            }
          },
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};