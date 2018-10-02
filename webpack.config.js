var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry:{
    home: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                      loader: 'css-loader',
                      options: {
                          sourceMap: true
                      }
                  },
                  {
                      loader: 'sass-loader',
                      options: {
                          sourceMap: true,
                          outputStyle: 'minimize'
                      }
                  }
                ],
            })
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
            ]
          },
          {
              test: /\.html$/,
              use: ['html-loader']
          },
          {
              test: /\.(jpg|png)$/,
              use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }
              ]
          }

    ]
},

plugins: [
    new HtmlWebpackPlugin({
        title: '',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: 'index.html',
    }),
    new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
    })
]
};
