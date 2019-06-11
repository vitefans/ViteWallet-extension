const path = require('path');
const merge = require('webpack-merge');

const SRC_PATH = path.join(__dirname, 'src');
const DIST_PATH = path.join(__dirname, 'dist');

// auto run
require('./buildRoutes');

let options = {
    entry: {
        popup: path.join(SRC_PATH, 'popup.js'),
        options: path.join(SRC_PATH, 'options.js'),
        background: path.join(SRC_PATH, 'background.js')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' }
                ]
            },
            {
                test: /(\.scss$|\.css$|\.sass$)/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: new RegExp('\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$'),
                loader: 'file-loader?name=[name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            src: SRC_PATH,
            services: path.join(SRC_PATH, '/services'),
            components: path.join(SRC_PATH, '/components'),
            pages: path.join(SRC_PATH, '/pages'),
            assets: path.join(SRC_PATH, '/assets'),
            router: path.join(SRC_PATH, '/router'),
            utils: path.join(SRC_PATH, '/utils'),
            plugins: path.join(SRC_PATH, '/plugins'),
            i18n: path.join(SRC_PATH, '/i18n'),
            version: path.join(__dirname, 'version.json')
        },
        extensions: [
            '.js', '.scss', '.vue', '.json'
        ]
    },
    plugins: require('./webpack/plugins')
};

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development') {
    const devConfig = require('./webpack/dev.config');
    options = merge(options, devConfig);
}

if (process.env.NODE_ENV === 'test') {
    const testConfig = require('./webpack/test.config');
    options = merge(options, testConfig);
}

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    const prodConfig = require('./webpack/prod.config');
    options = merge(options, prodConfig);
}

module.exports = options;
