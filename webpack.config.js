const webpack = require('webpack');

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
  // Configura os loaders e presets
  module: {
    rules: [
      {
        test: /.js?$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Traduções JS dos padrões definidos
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}