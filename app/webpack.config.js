var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index: ['./js/help/app.js'
            // './app/js/help/config.js',
            // './app/js/help/utils.js',
            // './app/js/controllers/home/homeCtrl.js',
            // './app/js/controllers/login/loginCtrl.js',
            // './app/js/controllers/test/testCtrl.js',
        ]
    },
    //入口文件输出配置
    output: {
        path: 'build/www',
        filename: 'app.build.js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.js$/,
            loader: 'jsx-loader?harmony'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
            new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
             
                filename: 'index.html', //生成的html存放路径，相对于 path
                template: 'index.html', //html模板路径
                inject: true, //允许插件修改哪些内容，包括head与body
                hash: true, //为静态资源生成hash值
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: false //删除空白符与换行符
                }
            })
        ],
        //其它解决方案配置
    resolve: {
        root: 'E:/ysmanager/node_modules', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            App: 'js/stores/AppStores.js',
            ActionType: 'js/actions/ActionType.js',
            AppAction: 'js/actions/AppAction.js'
        }
    }
};