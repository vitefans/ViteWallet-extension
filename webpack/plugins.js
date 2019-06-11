const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const goViteServer = {
    production: '\'wss://testnet.vitewallet.com/ws\'',
    test: '\'wss://testnet.vitewallet.com/test/ws\'',
    dev: '\'wss://testnet.vitewallet.com/test/ws\'',
    dexTestNet: '\'wss://testnet.vitewallet.com/beta/ws\''
};
const viteNet = {
    production: '\'https://testnet.vite.net/\'',
    test: '\'http://132.232.134.168:8080/\'',
    dev: '\'http://132.232.134.168:8080/\'',
    dexTestNet: '\'https://testnet.vite.net/\''
};
const ethServer = {
    production: '\'https:\/\/mainnet.infura.io\/http\'',
    test: '\'https://ropsten.infura.io/http\'',
    dev: '\'https://ropsten.infura.io/http\'',
    dexTestNet: '\'https://ropsten.infura.io/http\''
};
const contractAddress = {
    production: '\'0x1b793e49237758dbd8b752afc9eb4b329d5da016\'',
    test: '\'0x54b716345c14ba851f1b51dcc1491abee6ba8f44\'',
    dev: '\'0x54b716345c14ba851f1b51dcc1491abee6ba8f44\'',
    dexTestNet: '\'0x54b716345c14ba851f1b51dcc1491abee6ba8f44\''
};
const conversionHost = {
    production: '\'gateway.vite.net\'',
    test: '\'132.232.60.116:8000\'',
    dev: '\'132.232.60.116:8000\'',
    dexTestNet: '\'132.232.60.116:8000\''
};
const ethNet = {
    production: '\'https://etherscan.io\'',
    test: '\'https://ropsten.etherscan.io\'',
    dev: '\'https://ropsten.etherscan.io\'',
    dexTestNet: '\'https://ropsten.etherscan.io\''
};
const dexApiServer = {
    test: '"https://vitex.vite.net/test/api/"',
    dev: '"https://vitex.vite.net/test/api/"',
    dexTestNet: '"https://vitex.vite.net/beta/api/"'
};
const pushServer = {
    test: '"wss://vitex.vite.net/test/websocket"',
    dev: '"wss://vitex.vite.net/test/websocket"',
    dexTestNet: '"wss://vitex.vite.net/beta/websocket"'
};

const env = process.env.NODE_ENV || 'dev';
const SRC_PATH = path.join(__dirname, '../src');
const DIST_PATH = path.join(__dirname, '../dist');
const pkg = require('../package.json');

const plugins = [
    new CopyWebpackPlugin([
        {
            from: path.join(SRC_PATH, 'manifest.json'),
            transform: function (content) {
                // generates the manifest file using the package.json informations
                return Buffer.from(JSON.stringify({
                    description: process.env.npm_package_description,
                    version: process.env.npm_package_version,
                    ...JSON.parse(content.toString())
                }));
            }
        },
        {
            from: path.join(SRC_PATH, 'assets/icons'),
            to: path.join(DIST_PATH, 'icons')
        }
    ]),
    new HtmlWebpackPlugin({
        template: path.join(SRC_PATH, 'popup.html'),
        title: 'Vite Wallet',
        filename: 'popup.html',
        favicon: path.join(SRC_PATH, 'assets/imgs/logo.png'),
        chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
        template: path.join(SRC_PATH, 'options.html'),
        title: 'Vite Wallet Options',
        filename: 'options.html',
        favicon: path.join(SRC_PATH, 'assets/imgs/logo.png'),
        chunks: ['options']
    }),
    new HtmlWebpackPlugin({
        template: path.join(SRC_PATH, 'background.html'),
        filename: 'background.html',
        favicon: path.join(SRC_PATH, 'assets/imgs/logo.png'),
        chunks: ['background']
    }),
    new WriteFilePlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
        'process.env.version': `"${ pkg.version }"`,
        'process.env.NODE_ENV': `"${ env }"`,
        'process.env.goViteServer': goViteServer[env],
        'process.env.viteNet': viteNet[env],
        'process.env.contractAddress': contractAddress[env],
        'process.env.ethServer': ethServer[env],
        'process.env.conversionHost': conversionHost[env],
        'process.env.ethNet': ethNet[env],
        'process.env.pushServer': pushServer[env],
        'process.env.dexApiServer': dexApiServer[env]
    }),
    new webpack.NormalModuleReplacementPlugin(/\/buffer\//, function (resource) {
        resource.request = path.join(__dirname, '../node_modules/buffer/index');
    })
];

module.exports = plugins;
