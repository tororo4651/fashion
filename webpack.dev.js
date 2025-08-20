const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 9000,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  // watch: true,
  // ？ serveコマンドを実行した場合は、監視モードがデフォルトで有効になっているので、watch は削って良い。
  devtool: 'source-map',
});
