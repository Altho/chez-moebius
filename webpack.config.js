const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
    mode: 'development',
    entry: {
        index: './src/main.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devServer: {
        contentBase: './dist',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },

};