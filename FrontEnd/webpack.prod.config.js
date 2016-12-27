var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: false,
    devtool: 'source-map',
    entry: [
        'whatwg-fetch',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: '/static',
        filename: 'all.min.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
        }
  })
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
