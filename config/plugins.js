const webpack = require('webpack');
const path = require('path');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//npm i extract-text-webpack-plugin@next -D
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    plugins: [
        // optimization.splitChunks
        new CopyWebpackPlugin([{
            from:path.join(__dirname,'../src/public'),
            to:path.join(__dirname,'../dist')
        }]),
        // new webpack.ProvidePlugin({
        //     $:'jquery',
        // }),
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
        }),
        new webpack.BannerPlugin('zhufengpeixun'),
        new webpack.HotModuleReplacementPlugin()
    ]
}