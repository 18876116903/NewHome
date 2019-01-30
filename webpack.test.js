const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
                test: /\.(png|jpg|jpeg|gif|svg|ttf)$/,
                use: [{
                    loader: 'url-loader?limit=80000'
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
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