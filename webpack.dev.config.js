const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
  devServer: {
    contentBase: 'dist',
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 3000,
    open: true,
    compress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
