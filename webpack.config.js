const path = require('path');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//npm i extract-text-webpack-plugin@next -D
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const CONFIG = {
    publicPath: '/'
}
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: CONFIG.publicPath
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "less-loader"]
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "postcss-loader"]
            })
        }, {
            test: /\.(jpg|png|svg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    outputPath: 'images'
                }
            }]
        }, {
            test: /\.(html|html)$/,
            use: ['html-withimg-loader']
        }]
    },
    //watch: true,
    plugins: [
        new uglifyjsWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/style.css'
        }),
        new CleanWebpackPlugin(['dist']),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        host: '127.0.0.1',
        port: 9090,
        compress: true
    }
}