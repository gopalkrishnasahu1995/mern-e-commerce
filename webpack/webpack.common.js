const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, '..', './client/index.tsx'),
  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', './client'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './client/build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './client/index.html'),
    }),
  ],
}
