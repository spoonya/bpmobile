const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imageMinify() {
  return gulp
    .src([
      'src/assets/img/**/*.{gif,png,jpg,jpeg,svg,webp}',
      '!src/assets/img/svg/sprite/*.svg'
    ])
    // .pipe(
    //   imagemin([
    //     imagemin.gifsicle({ interlaced: true }),
    //     imagemin.mozjpeg({
    //       quality: 85,
    //       progressive: true
    //     }),
    //     imagemin.svgo({
    //       plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
    //     }),
    //     imagemin.optipng({ optimizationLevel: 4 })
    //   ])
    // )
    .pipe(gulp.dest('build/assets/img'));
};
