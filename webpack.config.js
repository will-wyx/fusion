const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ["./src/index.js"],
    output: {
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?importLoaders=1'},
                    {loader: 'postcss-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ]
};
