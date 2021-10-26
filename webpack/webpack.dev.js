const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 5000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
