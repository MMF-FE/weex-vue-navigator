const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = {
    entry: './src/index.ts',
    devtool: false,
    output: {
        path: path.resolve('./dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        modulesDirectories: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ],
        extensions: ['', '.js', '.ts', '.vue', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            }
        ]
    },
    vue: {
        loaders: {
            ts: 'ts-loader'
        }
    },
    externals: {
        vue: 'vue',
        'vue-router': 'vue-router'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'production'
        }),
        // minify with dead-code elimination
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // optimize module ids by occurrence count
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}
