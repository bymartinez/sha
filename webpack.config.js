const path = require('path');

const publicDevelopmentDir = path.resolve('./public/src');

module.exports = {
    entry: './public/src/index.js',
    output: {
        filename: 'production.min.js',
        path: path.resolve(__dirname,'public/dist')
    },
    module: {
        rules: [
            {
               test : /\.js?/,
               include: path.resolve(),
               loader: 'babel-loader' 
            }
        ]
    }
};



