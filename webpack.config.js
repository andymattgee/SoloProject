const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: {
        index: './frontend/src/index.js',
    },
    devServer : {

    },
    output: {
        filename: 'bundle.js',
        // publicPath: '/build',
        path: path.resolve (__dirname,'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './frontend/src/index.html'
    })],
    module : {
        rules : [
            {
                test: /\.jsx?/,
                // test: /\.?js$/,
                exclude : /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react', ]
                    }
                }  
            },
            {
                // test: /\.s[ac]ss$/i,
                // below works for basic CSS 
                test: /\.css$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },

        ]
    }
}