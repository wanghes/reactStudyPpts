var path = require('path');
var config = {
    entry: './main.js',
    output: {
       path: path.join(__dirname, ''),
        filename: 'index.js', //输出文件名字
    },
    devServer: {
      inline: true,
      port: 5550,
      hot:true,
      historyApiFallback:true
    },
    devtool: 'eval-source-map', //一旦代码出错可以定义出错位置
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react','stage-2']
            }
        }]
    }
}

module.exports = config;