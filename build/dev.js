const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config');

const options = (config.chromeExtensionBoilerplate || {});
const excludeEntriesToHotReload = (options.notHotReload || []);

for (const entryName in config.entry) {
    if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
        config.entry[entryName]
      = [
                (`webpack-dev-server/client?http://localhost:${ config.devServer.port }`),
                'webpack/hot/dev-server'
            ].concat(config.entry[entryName]);
    }
}

config.plugins = [
    new webpack.HotModuleReplacementPlugin()
].concat(config.plugins || []);

delete config.chromeExtensionBoilerplate;

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, config.devServer);

server.listen(config.devServer.port);
