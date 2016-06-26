var webpack = require('webpack');

module.exports = {
    
    entry: './dev/js/main.js',
    module: {
        loaders : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/main.min.js'
    }

};
