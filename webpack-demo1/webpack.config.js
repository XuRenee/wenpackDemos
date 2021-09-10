const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

// 可以通过此插件与其他项目实现模块共享
const ModuleFederationPlugin = require("webpack").container
    .ModuleFederationPlugin;
const webpack = require('webpack'); // 访问内置的插件
module.exports = {
    mode: 'development', // 模式， 生产， 测试， 开发
    entry: { // 入口文件，允许配置多个
        main: './app/index.js',
        vendor: './vendor/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: '[name].bundle.js', // 打包生成文件名
    },
    module: {
        rules: [ // 配置css， ts， style等解析
            {
                test: /\.css$/, use: ["style-loader", {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
        ]
    },
    plugins: [ // 使用插件
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ModuleFederationPlugin({
            name:'firstDemo', // name必须唯一必须跟
            filename:'firstDemo.js',
            exposes:{
                './Util':'./app/util.js'
            }
        })
    ],
};