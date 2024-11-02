const gulp = require('gulp');

module.exports = function video() {
  return gulp
    .src('src/assets/video/*')
    .pipe(gulp.dest('build/assets/video'));
};
