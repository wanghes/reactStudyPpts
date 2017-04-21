var path = require('path');

var config = {
   entry: './main.js',
   output: {
      path: path.join(__dirname),
      filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 7789,
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
            presets: ['es2015',"stage-2"]
         }
      }]
   }
}

module.exports = config;