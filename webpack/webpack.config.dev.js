const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
  }
});
