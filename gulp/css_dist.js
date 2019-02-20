const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

const config = require('../gulp.config');

function css_dist () {
    return src(config.tmp.file.css)
        .pipe( plumber() )
        .pipe( cssnano() )
        .pipe( rename('style.min.css') )
        .pipe( dest(config.dist.folder.css) );
}

module.exports = css_dist;