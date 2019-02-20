const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const injector = require('gulp-inject');

const config = require('../gulp.config');

function inject () {
    return src(config.inject.target.tmp)
        .pipe( plumber() )
        .pipe( injector( src(config.inject.src.tmp, config.inject.opt), config.inject.relative ) )
        .pipe( dest(config.inject.dest.tmp) );
}

module.exports = inject;