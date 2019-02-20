const { src, dest, series } = require('gulp');
const plumber = require('gulp-plumber');
const file = require('gulp-file');
const spriteSvg = require('gulp-svg-sprite');

const config = require('../gulp.config');

function spriteTemplate () {
    return src('*.*')
        .pipe( file('sprite.template.txt', config.sprite.template) )
        .pipe( dest('./') );
}

function spriteCreate () {
    return src(config.src.file.icon)
        .pipe( plumber() )
        .pipe( spriteSvg(config.sprite.config) )
        .pipe(dest('sprite'));
}

let sprite = series(spriteTemplate, spriteCreate);

module.exports = sprite;