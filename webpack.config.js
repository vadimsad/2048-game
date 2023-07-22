const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/ts/main.ts',
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/},
            {
                test: /\.(mp3|ogg|wav)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/sound', // Путь для сохранения файлов в сборке
                  },
                },
              },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './app/index.html'})
    ],
    mode: 'development',
}