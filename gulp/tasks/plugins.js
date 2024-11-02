const gulp = require('gulp');

module.exports = function plugins() {
  return gulp
    .src('src/assets/plugins/**/*')
    .pipe(gulp.dest('build/assets/plugins'));
};
