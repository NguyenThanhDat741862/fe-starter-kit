const del = require('del');

function clean () {
    return del('tmp/');
}

module.exports = clean;