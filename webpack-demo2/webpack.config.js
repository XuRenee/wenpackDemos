const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const ModuleFederationPlugin = require("webpack").container
    .ModuleFederationPlugin;
const webpack = require('webpack'); // 访问内置的插件
module.exports = {
    mode: 'development', // 模式， 生产， 测试， 开发
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [ // 使用插件
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ModuleFederationPlugin({
            name: "demo2",
            filename: "firstDemo.js",
            remotes: {
                firstDemo: "firstDemo@http://127.0.0.1:3000/firstDemo.js",// 模块地址
            },
        })
    ],
    experiments: {
        topLevelAwait: true, // 此处为新增配置
      }
}