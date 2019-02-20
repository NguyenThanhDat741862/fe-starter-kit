const { src, dest } = require('gulp');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');

const config = require('../gulp.config');

function img () {
    return src(config.src.file.img)
        .pipe( plumber() )
        .pipe( newer(config.tmp.folder.img) )
        .pipe( dest(config.tmp.folder.img) );
}

module.exports = img;