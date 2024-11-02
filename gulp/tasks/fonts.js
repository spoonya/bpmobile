const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('src/assets/fonts/**/*').pipe(gulp.dest('build/assets/fonts'));
};
