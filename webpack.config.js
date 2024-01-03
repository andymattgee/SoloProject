const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    mode: 'development', 
    entry: {
        index: './frontend/src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'build'),
        clean: true,
        assetModuleFilename:'[name][ext]'
    },
    devtool: 'source-map',
    devServer : {
        static: {
            directory: path.resolve(__dirname,'build'),
            publicPath: '/build/',
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,

    },
    //allows us to go over the default size of bundled package (lots of data/npm packages)
    performance : {
        hints: false,
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Solo Project",
        template: './frontend/src/index.html'
    })],
    //loaders go here
    module : {
        rules : [
            {
                // test: /\.jsx?/,
                test: /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react', ]
                    }
                }  
            },
            {
                test: /\.s[ac]ss$/i,
                // below works for basic CSS 
                // test: /\.css$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                // able to add images w this 
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],    
    }
}