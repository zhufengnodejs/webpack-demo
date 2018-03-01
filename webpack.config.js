
/**
 * source-map 独立文件，包括行和列
 * cheap-module-source-map 不包括列
 * eval-source-map 性能和安全隐患，只能用于开发阶段
 * cheap-module-eval-source-map 只有列
 */ 

const entry = require('./config/entry');
const mod = require('./config/module');
const plugins = require('./config/plugins');
const devtools = require('./config/devtools');
const devServer = require('./config/devServer');
const merge = require('webpack-merge');
const config = {
 watch:true,
 optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                chunks: "initial",
                minChunks: 2,
                maxInitialRequests: 5, // The default limit is too small to showcase the effect
                minSize: 0 // This is example is too small to create commons chunks
            },
            vendor: {
                test: /node_modules/,
                chunks: "initial",
                name: "vendor",
                priority: 10,
                enforce: true
            }
        }
    }
},
 watchOptions:{
     aggregateTimeout:500,//累积超时
     ignored:/node_modules/
 }
}
module.exports = merge(config,entry,mod,plugins,devtools,devServer);
