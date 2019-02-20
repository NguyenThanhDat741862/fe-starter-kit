const { src, dest } = require('gulp');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');

const config = require('../gulp.config');

function font_dist () {
    return src(config.tmp.file.fonts)
        .pipe( plumber() )
        .pipe( newer(config.dist.folder.fonts) )
        .pipe( dest(config.dist.folder.fonts) );
}

module.exports = font_dist;