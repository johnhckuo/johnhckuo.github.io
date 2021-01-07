const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../') + '/src/main.js',
    output: {
      filename: 'dist/main.js',
      path: path.resolve(__dirname, '../'),
    },
}