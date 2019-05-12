const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const order = require('gulp-order');

const config = require('../gulp.config');

function js () {
    return src(config.src.file.js)
        .pipe( plumber() )
        .pipe( order(config.js.order) )
        .pipe( concat('bundle.js') )
        .pipe( dest(config.tmp.folder.js) );
}

module.exports = js;