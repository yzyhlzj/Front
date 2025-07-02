# WebPack5学习

## 一、运行时命令

```
npm init -y
npm i webpack-cli -D
npx webpack ./src/main.js --mode=development
或
npx webpack ./src/main.js --mode=production
```

## 二、5大核心概念

### 1、entry(入口)

指示Webpack从哪个文件开始打包

### 2、output（输出）

### 3、loader(加载器)

webpack本身只能处理js、json等资源，其他资源需要借助loader，webpack才能解析

### 4、plugins(插件)

扩展Webpack的功能

### 5、mode(模式)

主要有两种模式

- 开发模式：development
- 生产模式：production

## 三、使用loader处理css文件

下载模块

```bash
npm install --save-dev css-loader ts-loader
npm install --save-dev less less-loader 
npm install style-loader -D
```

在main.js里 import "./css/index.css";

在webpack.config.js里的loader配置项下进行配置

```
const path = require('path');

module.exports = {
    //入口
    entry: './src/main.js',//相对路径
    output: {
        //文件名
        filename: 'main.js',
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
        ],
    },
    plugins: [
        //插件的配置
    ],
    //模式
    mode: 'development',
}
```

### 四、安装插件‘

#### html插件

npm i html-webpack-plugin --dev

配置插件

```js
const HtmlWebPackPlugin = require('html-webpack-plugin');//引入构造函数
//初始化构造函数
new HtmlWebPackPlugin({
            title: '测试标题',
        }),
```

babel插件

npm i  babel-loader @babel/core @babel/preset-env --dev

```

```

