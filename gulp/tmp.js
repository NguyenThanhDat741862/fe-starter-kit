const { series, parallel } = require('gulp');

const font = require('./font');
const img = require('./img');
const icon = require('./icon');
const js = require('./js');
const css = require('./css');
const html = require('./html');
const clean = require('./clean_tmp');
const inject = require('./inject');

let tmp = series(clean, parallel( font, img, series(icon, css), js), html, inject);

module.exports = tmp;