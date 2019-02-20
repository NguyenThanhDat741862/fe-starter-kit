const { src, dest, series } = require('gulp');
const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');

const inject = require('./inject_dist');

const config = require('../gulp.config');

function html_dist () {
    return src(config.tmp.file.html)
        .pipe( plumber() )
        .pipe( htmlmin(config.htmlmin) )
        .pipe( dest(config.dist.folder.html) );
}

module.exports = series(html_dist, inject);