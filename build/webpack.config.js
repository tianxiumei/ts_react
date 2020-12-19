const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')
const path = require('path')

module.exports = (env, argv) => {
console.log('__dirname::',path.resolve(__dirname, '../src/components'))
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};