const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const styles = require('./styles').styles;
const uiKitStyles = require('./styles').uiKitStyles;
const pug2html = require('./pug2html');
const script = require('./script').script;
const uiKitScript = require('./script').uiKitScript;
const copyDependencies = require('./copyDependencies');
const svgSprite = require('./svgSprite');
const video = require('./video');
const doc = require('./doc');
const data = require('./data');

const server = require('browser-sync').create();

function readyReload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch(
    'src/assets/img/**/*.{gif,png,jpg,svg,webp}',
    gulp.series(imageMinify, readyReload)
  );
  gulp.watch(
    'src/assets/sass/**/*.scss',
    gulp.series(styles, (cb) =>
      gulp.src('build/assets/css').pipe(server.stream()).on('end', cb)
    )
  );
  gulp.watch(
    'src/assets/sass/**/ui-kit.scss',
    gulp.series(uiKitStyles, (cb) =>
      gulp.src('build/ui-kit').pipe(server.stream()).on('end', cb)
    )
  );
  gulp.watch('src/assets/js/**/*.js', gulp.series(script, readyReload));
  gulp.watch(
    'src/assets/js/ui-kit.js',
    gulp.series(uiKitScript, readyReload)
  );
  gulp.watch('src/templates/**/*.pug', gulp.series(pug2html, readyReload));
  gulp.watch(
    'src/assets/img/svg/sprite/*.svg',
    gulp.series(svgSprite, readyReload)
  );
  gulp.watch('src/assets/video/**/*', gulp.series(video, readyReload));
  gulp.watch('src/assets/doc/**/*', gulp.series(doc, readyReload));
  gulp.watch('src/assets/data/**/*', gulp.series(data, readyReload));
  gulp.watch('package.json', gulp.series(copyDependencies, readyReload));

  return cb();
};
