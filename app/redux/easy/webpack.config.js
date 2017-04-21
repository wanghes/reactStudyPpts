var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);


module.exports= {
 entry: './main.js',
   output: {
      path: path.join(__dirname),
      filename: 'bundle.js'
   },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
     port: 5678
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: ROOT_PATH
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: ROOT_PATH
      }
    ]
  }
}
