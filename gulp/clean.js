const del = require('del');

function clean () {
    return del(['dist/', 'tmp/']);
}

module.exports = clean;