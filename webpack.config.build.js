const config = require('./webpack.config.js');

module.exports = {
    ...config,
    entry: {
        'bootstrap-modal': './src/main.js',
    },
    output: {
        ...config.output,
        library: 'Vue2BootstrapModal',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    devtool: 'source-map'
};
