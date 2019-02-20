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
        uglify(),
        rename('bundle.min.js'),
        dest(config.dist.folder.js)
    ], done);
}

module.exports = js_dist;