const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './server/src/index.js'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  }
}
