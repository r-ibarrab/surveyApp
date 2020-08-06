const htmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path:'/',
        filename:'bundle.js',
        publicPath: "/"
    },
    devServer:{
        port:4000,
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png||jpg||jpeg||gif||svg)$/,
                use:'file-loader'
                
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/client/index.html'
        }),
        new LiveReloadPlugin()
    ]
  

}