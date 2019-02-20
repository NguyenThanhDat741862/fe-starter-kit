const { src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const del = require('del');

const sprite = require('./sprite');

const config = require('../gulp.config');

function getSprite () {
    return src(config.sprite.svg)
        .pipe( rename('sprite.svg') )
        .pipe( dest(config.tmp.folder.img) );
}

function getSass () {
    return src(config.sprite.sass.file)
        .pipe( rename('_icon.scss') )
        .pipe( dest(config.sprite.sass.dest) );
}

function deleteSprite () {
    return del(config.sprite.deleted);
}

let icon = series(sprite, getSprite, getSass, deleteSprite);

module.exports = icon;