/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

const AppInfo = require('./AppInfo');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'eventsource-polyfill', // necessary for hot reloading with IE
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    './playground/src/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.css/,
        loader: 'style!css',
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=100000000',
      },
      {
        test: /\.svg$/,
        loader: 'babel!react-svg'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      // 'isomorphic': isomorphicPath,
    },
  },
  output: {
    path: '/dist/',
    filename: './bundle.js',
  },
  devServer: {
    contentBase: './',
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: AppInfo.port,
    host: AppInfo.host,
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      template: 'playground/src/template.html',
    })
  ],
};

module.exports = config;

