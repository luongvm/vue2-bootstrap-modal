var path = require('path')
var webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: {
        example: ['./src/example.js'],
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "[name].js",
    },


    resolve: {
        modules: ['node_modules'],
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
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html-loader'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(woff2?|svg)$/,
            loader: 'url-loader?limit=10000'
        }, {
            test: /\.(ttf|eot)$/,
            loader: 'file-loader'
        },]
    },

    // babel: {
    //     presets: ['es2015', 'stage-0'],
    //     plugins: ['transform-runtime', 'transform-vue-jsx'],
    // },
    plugins: [
        // make sure to include the plugin for the magic

    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vuejs.github.io/vue-loader/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ])
}
