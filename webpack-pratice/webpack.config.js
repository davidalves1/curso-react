const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Define o modo de operação: 'development' ou 'production'
  mode: 'development',
  // Define o arquivo de entrada, que concentrará os outros módulos
  entry: './src/index.js',
  // Define a pasta e o arquivo de saída
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  // Configurações do webpack-dev-server [--watch --progress --hot]
  devServer: {
    port: 5000,
    contentBase: './public'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  // Configura os loaders e presets
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Traduções JS dos padrões definidos
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  }
}