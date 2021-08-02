const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, 'server', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundel.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new MiniCssExtractPlugin({ chunkFilename: '[hash][ext][query]' })],
}
