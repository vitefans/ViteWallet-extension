module.exports = {
    mode: 'production'
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendor',
    //         chunks: 'all'
    //       },
    //       default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true
    //       }
    //     }
    //   },
    //   minimizer: [
    //     // We specify a custom UglifyJsPlugin here to get source maps in production
    //     new UglifyJsPlugin({
    //       cache: true,
    //       parallel: true,
    //       uglifyOptions: {
    //         compress: false,
    //         ecma: 6,
    //         mangle: true
    //       },
    //       sourceMap: true
    //     })
    //   ]
    // }
};
