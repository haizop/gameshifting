var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.common.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: config.ENTRY,

  output: {
    path: config.DIST_PATH,
    filename: '[name]-bundle.js'
  },

  devtool: 'cheap-hidden-source-map',

  resolve: {
    root: path.resolve(config.FRONTEND_PATH),
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },

      {
        test: /\.?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },

      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },

      {
        test: /\.(woff|woff2)$/,
        loader:"url?prefix=font/&limit=5000"
      },

      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },

      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name]-bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  ],
}
