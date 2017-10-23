'use strict';

//const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = (process.env.NODE_ENV || 'dev').trim().toLowerCase();
const isDevEnv = () => NODE_ENV === 'dev';
const isProdEnv = () => NODE_ENV === 'prod';

/*        copyPluginPaths: [
	{from: 'frontend/view/utility', to: 'WEB-INF'},
	{from: 'frontend/fonts/open-sans-condensed.woff.gz', to: 'assets/open-sans-condensed.woff.gz'},
	{from: 'frontend/img/favicon.png', to: 'assets/img/favicon.png'}
]*/

if (isDevEnv() || isProdEnv()) {
	console.log("***** NODE_ENV=" + NODE_ENV + " *****")
} else {
	throw new Error("Unknown NODE_ENV '" + NODE_ENV + '\'');
}

const plugins = [
    new CleanWebpackPlugin(['/dist'], {
        verbose: true
    }),
    new webpack.NoErrorsPlugin()
  //  new CopyWebpackPlugin(ENV_DATA[NODE_ENV].copyPluginPaths)
    /*        new webpack.ProvidePlugin({
     angular: 'frontend/js/thirdparty/angular.js'
     })*/
];

if (!isDevEnv()) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        drop_console: true,
        dead_code: true,
        unsafe: true
    }));
}

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: isDevEnv() ? 'eval' : null,
    watch: isDevEnv(),
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
