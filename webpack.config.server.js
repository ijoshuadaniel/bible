const path = require('path')

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
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
