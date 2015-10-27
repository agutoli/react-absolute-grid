var webpack = require( 'webpack' );

module.exports = {
    entry: './lib/AbsoluteGrid.jsx',
    output: {
      filename: './dist/reactAbsoluteGrid.min.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
    },
    module: {
        loaders: [
            { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    devtool: "inline-source-map"
};
