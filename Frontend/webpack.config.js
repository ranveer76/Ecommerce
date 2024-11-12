const path = require('path');
const dotenv = require('dotenv-webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const minicssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '..', 'Backend', 'public', 'js'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '..', 'Backend', 'public'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        client: {
            logging: 'warn',
        },
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }
            devServer.app.use((req, res, next) => {
                console.clear();
                next();
            });
            return middlewares;
        },
        proxy: [
            {
                context: ['/api', '/auth'],
                target: 'http://localhost:5000',
            },
        ],
    },
    plugins: [
        new dotenv(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: path.join(__dirname, '..', 'Backend', 'public', 'index.html'),
        }),
        new minicssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[id].css',
        }),
    ],
};
