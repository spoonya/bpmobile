const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const pugLinter = require('gulp-pug-linter');
const bemValidator = require('gulp-html-bem-validator');
const prettify = require('gulp-html-prettify');
const config = require('../config');

module.exports = function pug2html() {
  return gulp
    .src('src/templates/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug())
    .pipe(bemValidator())
    .pipe(
      prettify({
        brace_style: 'expand',
        indent_size: 2,
        indent_char: '',
        indent_inner_html: true,
        preserve_newlines: true
      })
    )
    .pipe(gulp.dest('build'));
};
