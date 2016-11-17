// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    devtool: '#eval-source-map',
    entry: [
        'whatwg-fetch',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        publicPath: '/',
        filename: 'all.min.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve:
    {
        extensions:['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: ['babel'], query: { presets: ['es2015', 'stage-0', 'react'] } },
            { test: /\.jsx$/, exclude: /node_modules/, loader: ['babel'], query: { presets: ['es2015', 'stage-0', 'react'] } }
        ]
    }
};
