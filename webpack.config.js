const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Подключаем плагин

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Указываем путь к index.html
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true, // Включаем HMR
        client: {
            logging: 'none', // Отключаем логирование Webpack Dev Server в консоли
            overlay: false, // Отключаем показ ошибок на странице
        },
    },
    devtool: 'source-map',
    mode: 'development',
};
