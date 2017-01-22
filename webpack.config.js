module.exports = {
    entry: __dirname + '/src/shadow.js',
    output: {
        path: __dirname + '/dist',
        filename: 'shadow.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
