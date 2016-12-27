var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    devtool: '#eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'whatwg-fetch',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: '/static',
        filename: 'all.min.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    resolve:
    {
        extensions:['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: [/node_modules/, /config/], loaders: ['react-hot-loader/webpack', 'babel'] },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]
      }
        ]
    }
};
