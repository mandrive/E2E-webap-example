var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

/*var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/html/index.html'));
});

app.listen(8080, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8080/');
})*/
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
