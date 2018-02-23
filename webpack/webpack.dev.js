const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

const ROOT = path.resolve(__dirname, '../');
const PATHS = {
    dist: `${ROOT}/dist/`,
    src: `${ROOT}/src/`,
    entry: [`${ROOT}/src/index.js`]
};

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.dist,
    port: 3000,
    historyApiFallback: true,
    stats: 'errors-only',
    openPage: '',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    hot: true,
    open: true
  }
});
