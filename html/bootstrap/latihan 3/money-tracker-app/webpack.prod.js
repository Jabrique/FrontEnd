const path = require('path')
const common = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
})