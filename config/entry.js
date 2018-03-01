const path = require('path');

const CONFIG = {
    publicPath: '/'
}
module.exports = {
    entry:{
        main:'./src/index.js',
        index:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: CONFIG.publicPath
    }
}