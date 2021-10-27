let path = require('path')
// let {CleanWebpackPlugin} = require('clean-webpack-plugin')
// let html = require('html-webpack-plugin')
let webpack = require('webpack')
let base = require('./base.config')
let {merge} = require('webpack-merge')
module.exports = merge(base,{
    mode:"development",
    devtool:"eval-cheap-module-source-map",//eval-cheap-module-source-map
    plugins: [
        // new CleanWebpackPlugin({
        //     //保留mydist中的yaya.html
        //     cleanOnceBeforeBuildPatterns:['**/*','!yaya.html']
        // }),
        // new html({
        //     template:'./public/index.html', //指定用来渲染的html模板
        //     // filename:'main.html',   //生成的html文件的名字
        //     titleyaya:"yaya开发",
        //     qqq: '<link href="http://baidu.com"/>'
        // }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            // VERSION: JSON.stringify('5fa3b9'),
            // BROWSER_SUPPORTS_HTML5: true,
            // TWO: '1+1',
            // 'typeof window': JSON.stringify('object'),
            // 'process.env.NODE_ENV': JSON.stringify('developmet'),
          })
    ],
    devServer: {
        //开发服务器 的配置项
        //指定默认打开的端口
        //原来的8080已经没有服务了
        port: 3000, // 默认8080
        // 运行后打开界面
        // open: true,
        //热更新（页面不刷新，对应的该模块试图更新，指定某个模块） 
        // 自动更新（页面刷新）
        hot: true,  
        // 静态服务文件,指定某个文件夹作为静态服务
        // contentBase: path.resolve(__dirname, '../public'),
        static: {
            directory: path.join(__dirname, '../public'),
          },
        // proxy: {
        //     '/p2p':'http://www.renren'
        // }
    }
}) 