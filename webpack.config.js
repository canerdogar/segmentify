var path = require('path');
 var webpack = require('webpack');
 module.exports = {
   mode: "development",
     entry: './app.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', 
                        { 
                          "corejs": "3",
                          "useBuiltIns": "usage",
                          "targets": {
                            "edge": "17",
                            "firefox": "60",
                            "chrome": "67",
                            "safari": "11.1",
                            "ie": "11"
                          } 
                        }
                      ]
                    ],
                  }
                }
              }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };