const gulp = require('gulp');

const serve = require('./gulp/tasks/serve');
const pug2html = require('./gulp/tasks/pug2html');
const { styles, uiKitStyles } = require('./gulp/tasks/styles');
const { script, uiKitScript } = require('./gulp/tasks/script');
const fonts = require('./gulp/tasks/fonts');
const favicon = require('./gulp/tasks/favicon');
const imageMinify = require('./gulp/tasks/imageMinify');
const clean = require('./gulp/tasks/clean');
const copyDependencies = require('./gulp/tasks/copyDependencies');
const svgSprite = require('./gulp/tasks/svgSprite');
const video = require('./gulp/tasks/video');
const doc = require('./gulp/tasks/doc');
const plugins = require('./gulp/tasks/plugins');

function setMode(isProduction = false) {
  return (cb) => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development';
    cb();
  };
}

const dev = gulp.parallel(
  pug2html,
  styles,
  uiKitStyles,
  script,
  uiKitScript,
  fonts,
  favicon,
  imageMinify,
  svgSprite,
  video,
  doc,
  plugins
);

const build = gulp.series(clean, copyDependencies, dev);

module.exports.start = gulp.series(setMode(), build, serve);
module.exports.build = gulp.series(setMode(true), build);
