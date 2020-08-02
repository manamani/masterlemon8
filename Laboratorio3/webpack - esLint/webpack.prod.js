const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: "none",
  stats: 'verbose',
  plugins: [
    new Dotenv({
      path: './prod.env',
    }),
  ],
});