const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const pump = require('pump');

const config = require('../gulp.config');

function js_dist (done) {
    pump([
        src(config.tmp.file.js),
        plumber(),
        rename('bundle.min.js'),
        uglify(),
        dest(config.dist.folder.js)
    ], done);
}

module.exports = js_dist;