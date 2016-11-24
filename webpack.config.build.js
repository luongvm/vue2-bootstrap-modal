var webpack = require('webpack');

module.exports = require('./webpack.config.js');



module.exports.entry = {
    'bootstrap-modal': './src/main.js',
}

module.exports.output.library = 'Vue2BootstrapModal';
module.exports.output.libraryTarget = 'umd';
