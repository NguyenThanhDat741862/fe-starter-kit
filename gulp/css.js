const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');

const config = require('../gulp.config');

function css () {
    return src(config.src.file.sass)
        .pipe( plumber() )
        .pipe( sass().on('error', sass.logError) )
        .pipe( rename('style.css') )
        .pipe( autoprefixer(config.autoprefixer) )
        .pipe( dest(config.tmp.folder.css) );
}

module.exports = css;