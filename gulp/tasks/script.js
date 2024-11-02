const gulp = require('gulp');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const stripImportExport = require('gulp-strip-import-export');
const concat = require('gulp-concat');

function script() {
  return gulp
    .src(['src/assets/js/**/*.js', '!src/assets/js/pages.js', '!src/assets/js/ui-kit.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(stripImportExport())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(gulp.src('src/assets/js/pages.js', { allowEmpty: true }))
    .pipe(gulp.dest('build/assets/js'));
}

function uiKitScript() {
  return gulp
    .src('src/assets/js/ui-kit.js', { allowEmpty: true })
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(stripImportExport())
    .pipe(gulp.dest('build/assets/ui-kit'));
}

module.exports = {
  script,
  uiKitScript
};
