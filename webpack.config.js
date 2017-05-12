const path = require('path');
const webpack = require('webpack');

//自动上传到服务器
const WebpackSftpClient = require('webpack-sftp-client');
//单独处理生成html
const htmlWebpackPlugin = require('html-webpack-plugin');
//单独打包css
const extractTextPlugin = require('extract-text-webpack-plugin');
//生成日期标志
const buildTime = new Date().toLocaleString();
//编译之前清理目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',//配置开发过程使用
    entry: {
        vendor : ["./src/js/comm.js"],
        app: "./src/js/app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[chunkhash:6].js",
        chunkFilename: 'js/[name].[chunkhash:6].js',
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                options: {
                    presets: ["react","es2015"]
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/i,
                use: extractTextPlugin.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
                loader: "url-loader",
                query: {
                    name: "../image/[hash].[ext]",
                    limit: 5000
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }),
        new htmlWebpackPlugin({
            title: buildTime,
            filename: 'index.html',
            template: "./src/index.html"
        }),

        new webpack.BannerPlugin("The file is created by innovationer--"+ new Date()),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new CleanWebpackPlugin(['dist/js/*.js*']),
        new CleanWebpackPlugin(['dist/css/*.css*']),
        new extractTextPlugin('css/[name].[contenthash:6].css')
        // new webpack.optimize.UglifyJsPlugin()   //暂时注掉，不压缩
    ]
};