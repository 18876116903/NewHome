const webpack = require("webpack");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [{
    mode: 'production', // production development
    entry: {
        'index': './src/js/index.js',
        'about': './src/js/about.js',
        'technology': './src/js/technology.js',
        'jobs': './src/js/jobs.js',
        'products': './src/js/products.js',
    },
    output: {
        path: path.join(__dirname, ""),
        filename: 'public/js/[name].js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 819600,
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
                test: /\.(ttf|eot)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "/public/font",
                        publicPath: "../font"
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/'
                    }
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.(txt|html|art)$/,
                use: 'raw-loader'
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].css',
            chunkFilename: '[id].css',
            publicPath: "aaa"
        }),

        new CopyWebpackPlugin([{
                from: './src/view/img/',
                to: './public/img/',
                toType: 'dir'
            },
            {
                from: './src/view/js/',
                to: './public/js/',
                toType: 'dir'
            }, {
                from: './src/view/favicon.ico',
                to: './public/favicon.ico',
                toType: 'file'
            }
        ]),
    ],


    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    ie8: true,
                    ecma: 5,
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            })
        ]
    },


}]