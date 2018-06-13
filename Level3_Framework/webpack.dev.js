const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
 // devtool: 'source-map',
  entry: {
    index: './src/index.js',
    contact: './src/contact.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]_bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
         /*  {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
              ],
              sourceMap: true
            }
          }, */
          {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(png|jpg|svg|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      chunks: ['contact'],
      template: './src/contact.html'
    })
  ]
}