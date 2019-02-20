const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const linter = require('gulp-eslint');
const concat = require('gulp-concat');
const order = require('gulp-order');

const config = require('../gulp.config');

function js () {
    return src(config.src.file.js)
        .pipe( plumber() )
        .pipe( order(config.js.order) )
        .pipe( linter(config.js.eslint) )
        .pipe( linter.format() )
        .pipe( concat('bundle.js') )
        .pipe( dest(config.tmp.folder.js) );
}

module.exports = js;