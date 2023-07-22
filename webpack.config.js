const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/ts/main.ts',
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/},
            {test: /\.mp3$/, use: 'file-loader'},
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@sound': path.resolve(__dirname, 'app/assets/sound'),
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './app/index.html'})
    ],
    mode: 'production',
}