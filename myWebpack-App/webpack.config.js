const path = require('path');


module.exports = {
    //bundling
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode:'development'
    //loaders
    //plugins
}