const gulp = require('gulp');

module.exports = function doc() {
  return gulp
    .src('src/assets/doc/*')
    .pipe(gulp.dest('build/assets/doc'));
};
