// let path = require('path')
// let {CleanWebpackPlugin} = require('clean-webpack-plugin')
// let html = require('html-webpack-plugin')
let webpack = require('webpack')
let {merge} = require('webpack-merge')
let base = require('./base.config')
module.exports = merge(base,{
    // mode:"development",
    mode:"production",
    // entry:"./src/index.js",
    // output: {
    //     filename:'index.[fullhash:6].js',
    //     path: path.resolve(__dirname,'../mydist')
    // },
    plugins: [
        // new CleanWebpackPlugin({
        //     //保留mydist中的yaya.html
        //     cleanOnceBeforeBuildPatterns:['**/*','!yaya.html']
        // }),
        // new html({
        //     template:'./public/index.html', //指定用来渲染的html模板
        //     // filename:'main.html',   //生成的html文件的名字
        //     titleyaya:"yaya生产",
        //     qqq: '<link href="http://baidu.com"/>',minify:false
        // }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            // VERSION: JSON.stringify('5fa3b9'),
            // BROWSER_SUPPORTS_HTML5: true,
            // TWO: '1+1',
            // 'typeof window': JSON.stringify('object'),
            // 'process.env.NODE_ENV': JSON.stringify('developmet'),
          })
    ]
}) 