const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

process.env.NODE_ENV = 'production'
module.exports = merge(baseConfig, {
  mode: 'production'
});
