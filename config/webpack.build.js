const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    optimization: {
        minimize: false
    },
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        library: 'Module'
    }
});