var webpack = require('webpack');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var bundler = webpack(webpackConfig);

browserSync.init({
    server: {
        baseDir: './src/html',
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(bundler, {
                publicPath: webpackConfig.output.publicPath,
                hot: true,
                headers: { 'Access-Control-Allow-Origin': '*' },
                stats: { colors: true },
            }),
            webpackHotMiddleware(bundler)
        ]
    },
    files: [
        './src/html/*.html'
    ]
});
