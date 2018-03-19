const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    devServer: {
        port: 8000,
        contentBase: __dirname + '/dist',
    },
    module: {
        rules:[{
            test: /.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread', 'react-html-attrs']
                }
            }
        },
        {
            test: /\.(ttf|eot|svg|woff|woff2|png)$/,
            use: 'url-loader?limit=10000'
        },
        {
            test:/\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('app.bundle.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        })
    ]
}
