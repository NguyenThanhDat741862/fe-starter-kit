const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const flatmap = require('gulp-flatmap');

const config = require('../gulp.config');

function html () {
    return src(config.src.file.html.content)
        .pipe( plumber() )
        .pipe( flatmap((stream, file) => {
            return src([config.src.file.html.header , file.path, config.src.file.html.footer])
                .pipe( concat(file.basename) )
                .pipe( dest(config.dir.tmp) );
        }) );
}

module.exports = html;