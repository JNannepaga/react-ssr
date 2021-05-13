const Path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const clientConfig = {

    mode: 'development',

    entry: './src/client/index.js',

    output: {
        path: Path.resolve(__dirname, 'public'),
        filename: 'client-bundle.js'        
    }
};

module.exports = merge(baseConfig, clientConfig);