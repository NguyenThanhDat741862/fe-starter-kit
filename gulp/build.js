const { series, parallel } = require('gulp');

const css = require('./css_dist');
const font = require('./font_dist');
const img = require('./img_dist');
const js = require('./js_dist');
const html = require('./html_dist');
const clean = require('./clean_dist');

let build = series(clean, series( parallel(css, font, img, js) , html) );

module.exports = build;