
const path = require('path');

const routes = {
  inputs: path.resolve('src'),
  output: path.resolve('public', 'js')
}

module.exports = {
  entry: [routes.inputs],
  output: {
    path: routes.output,
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}