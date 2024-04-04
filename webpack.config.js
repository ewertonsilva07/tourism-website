const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'src/js/bundle'),
        filename: 'bundle.js'
    },
    mode: 'production'
};

