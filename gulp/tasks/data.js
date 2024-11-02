const gulp = require('gulp');

module.exports = function data() {
  return gulp
    .src('src/assets/data/**/*')
    .pipe(gulp.dest('build/assets/data'));
};
