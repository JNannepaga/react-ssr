const Path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
    target: 'node',

    mode: 'development',

    externals: [nodeExternals()],

    entry: './src/server/index.js',

    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'server-bundle.js'        
    }
};

module.exports = merge(baseConfig, serverConfig);