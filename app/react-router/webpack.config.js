var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {

   entry: './src/js/main.js',
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 32767,
      hot:true,
      progress:true,
      historyApiFallback:true
   },
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['es2015', 'react']
         }
      }]
   },
   devtool: 'eval-source-map',
   plugins:[
      new HtmlWebpackPlugin({
         title:"this is a flux info",
         template: path.resolve('src', 'index.tpl.html'),
         filename: 'index.html'
      })
   ]
}

module.exports = config;