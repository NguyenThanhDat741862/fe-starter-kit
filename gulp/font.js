const { src, dest } = require('gulp');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');

const config = require('../gulp.config');

function font () {
    return src(config.src.file.fonts)
        .pipe( plumber() )
        .pipe( newer(config.tmp.folder.fonts) )
        .pipe( dest(config.tmp.folder.fonts) );
}

module.exports = font;