const { parallel, series, watch } = require('gulp');
const browsersync = require('browser-sync').create();

const font = require('./font');
const js =  require('./js');
const css = require('./css');
const img = require('./img');
const icon = require('./icon');
const html = require('./html');
const tmp = require('./tmp');
const inject = require('./inject');

const config = require('../gulp.config');

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: config.dir.tmp
        },
        port: config.port
    });
    done();
}

function reload(done) {
    browsersync.reload();
    done();
}

function watchFile () {
    watch(config.watch.font, series(font, reload));
    watch(config.watch.img, series(img, reload));
    watch(config.watch.icon, series(icon, reload));
    watch(config.watch.js, series(js, inject, reload));
    watch(config.watch.sass, series(css, inject, reload));
    watch(config.watch.html, series(html, inject, reload));
}

let watchSrc = series(tmp, parallel(watchFile, browserSync));

module.exports = watchSrc;