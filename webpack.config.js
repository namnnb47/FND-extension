const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Crx = require('crx-webpack-plugin');
const { version } = require('./package.json');

module.exports = {
    entry: {
        background: './src/js/background.js',
<<<<<<< Updated upstream
        'in-content': './src/js/in-content.js'
=======
        'in-content': './src/js/in-content.js',
        'main-script': './src/js/main-script.js',
        'popup-init': './src/js/popup-init.js',
        'popup-script': './src/js/popup-script.js',
        'welcome-script': './src/js/welcome-script.js',
        'cookie': './src/js/cookie.js',
        'popup': './src/js/popup.js',
>>>>>>> Stashed changes
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    cache: true,
    devtool: 'eval-cheap-module-source-map',

    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './manifest.json' },
            { from: './src/images' },
            { from: './src/views' },
            { from: './src/styles' }
        ])
    ]
};
