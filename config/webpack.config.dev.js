const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/_js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'src/_assets/js/')
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      Popper: 'popper.js'
    })
  ]
};