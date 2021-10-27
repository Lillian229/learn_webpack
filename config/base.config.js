// 放一些公用的配置
let path = require('path')
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
let html = require('html-webpack-plugin')
let webpack = require('webpack')
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:"./src/index.js",
    output: {
        filename:'index.[fullhash:6].js',
        path: path.resolve(__dirname,'../mydist')
    },
    plugins: [
        new CleanWebpackPlugin({
            //保留mydist中的yaya.html
            cleanOnceBeforeBuildPatterns:['**/*','!yaya.html']
        }),
        new html({
            template:'./public/index.html', //指定用来渲染的html模板
            // filename:'main.html',   //生成的html文件的名字
            titleyaya:"yaya",
            qqq: '<link href="http://baidu.com"/>',minify:false
        }),
        new webpack.DefinePlugin({
            // from:
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new MiniCssExtractPlugin({
            filename:'css/index.css'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:[MiniCssExtractPlugin.loader,'css-loader']
                
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader', 'less-loader'],
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        "postcss-preset-env",
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                },
              }],
                //忽略，排除掉node_modules里的文件，如果匹配上，忽略
                exclude: /node_modules/
            }
    }