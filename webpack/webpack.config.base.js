const path = require('path');
const webpack = require('webpack');

const env = 'development';

process.env.NODE_ENV = env;

const config = {
  mode: env,
  entry: {
    index: path.join(__dirname, '../src/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'utils.min.js',
    library: 'myutils',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', 'js', 'tsx', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: require.resolve('babel-loader'),
      },
    ],
  },
};

module.exports = config;
