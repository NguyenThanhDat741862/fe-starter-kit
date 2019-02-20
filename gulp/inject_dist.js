const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const injector = require('gulp-inject');

const config = require('../gulp.config');

function inject () {
    return src(config.inject.target.dist)
        .pipe( plumber() )
        .pipe( injector( src(config.inject.src.dist, config.inject.opt), config.inject.relative ) )
        .pipe( dest(config.inject.dest.dist) );
}

module.exports = inject;