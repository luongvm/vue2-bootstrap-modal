const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        example: './src/example.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "[name].js",
    },

    resolve: {
        alias: {},
        extensions: ['.js', '.vue', '.json'],
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, '.')
        },
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 8080
    },

    devtool: 'eval-source-map'
}
