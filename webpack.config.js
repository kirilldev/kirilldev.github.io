'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const plugins = [
    new CleanWebpackPlugin(['/dist'], {
        verbose: true
    }),
    new webpack.NoErrorsPlugin()
];

plugins.push(new webpack.optimize.UglifyJsPlugin({
    drop_console: true,
    dead_code: true,
    unsafe: true
}));

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: null,
    watch: false,
    watchOptions: {
        aggregateTimeout: 200
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(woff)$/,
                loader: 'file?name=/assets/[name].[ext]'
            },
            {
                test: /\.(png)$/,
                loader: 'url?name=/assets/img/[name].[ext]&limit=4096'
            }
        ],

        noParse: '(angular|jquery|angular-route|angular-animate)'
    },

    plugins: plugins
};
