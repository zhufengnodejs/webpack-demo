const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
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
        },{
            test:/\.(jsx|js)$/,
            use:{
                loader:'babel-loader'
            },
            exclude:/node_modules/
        }]
    },
}