const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const imgmin = require('gulp-imagemin');

const config = require('../gulp.config');

function img_dist () {
    return src(config.tmp.file.img)
        .pipe( plumber() )
        .pipe( imgmin() )
        .pipe( dest(config.dist.folder.img) );
}

module.exports = img_dist;