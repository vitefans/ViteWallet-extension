const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        quiet: false,
        host: '0.0.0.0',
        port: 8081,
        contentBase: path.join(__dirname, '../dist'),
        headers: { 'Access-Control-Allow-Origin': '*' },
        disableHostCheck: true,
        proxy: {
            '/gw': {
                target: 'http://132.232.60.116:8000',
                changeOrigin: true,
                secure: false
            },
            '/trade': {
                target: 'http://localhost:8081',
                pathRewrite: { '^/trade\w*': '' }
            }
        }
    },
    devtool: 'source-map'
};
