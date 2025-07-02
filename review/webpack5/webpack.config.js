const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { options } = require('less');

module.exports = {
    devtool: "inline-source-map",
    //入口
    entry: './src/main.js',//相对路径
    output: {
        //文件名
        filename: '[name].[fullhash].js',
        //文件的输出路径
        //__dirname是node.js的全局变量，表示当前文件所在的目录
        path: path.resolve(__dirname, 'dist'),
    },
    //加载器
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //使用css-loader和style-loader来处理css文件
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'], //使用css-loader和style-loader来处理css文件
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
            },
        ],
    },
    plugins: [
        //插件的配置
        new HtmlWebPackPlugin({
            title: '测试标题',
        }),
    ],
    devServer: {
        host: "localhost",
        port: "3000",
        open: true,
    },
    //模式
    //mode: 'production',
    mode: 'development',
}