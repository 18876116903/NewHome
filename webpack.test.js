const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [{
    mode: 'development',
    entry: {
        'index': './src/js/index.js',
        'about': './src/js/about.js',
        'technology': './src/js/technology.js',
        'jobs': './src/js/jobs.js',
    },
    output: {
        path: path.join(__dirname, "dev"),
        filename: 'js/[name].js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 81960,
                        fallback: 'file-loader',
                    }
                }, {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "./font"
                    }
                }]
            },
            {
                test: /\.(ttf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "./font"
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.(txt|html)$/,
                use: 'raw-loader'
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/view/index.html'),
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/view/about.html'),
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/view/technology.html'),
            filename: 'technology.html',
            chunks: ['technology']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/view/jobs.html'),
            filename: 'jobs.html',
            chunks: ['jobs']
        }),

        new CopyWebpackPlugin([{
                from: './src/view/img/',
                to: './img/',
                toType: 'dir'
            },
            {
                from: './src/view/css/',
                to: './css/',
                toType: 'dir'
            },
            {
                from: './src/view/js/',
                to: './js/',
                toType: 'dir'
            }, {
                from: './src/view/favicon.ico',
                to: './favicon.ico',
                toType: 'file'
            }
        ])
    ]

}]