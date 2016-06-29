var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var mocha = require('mocha');
var should = require('should');
var mochaPhantomJs = require('gulp-mocha-phantomjs');

 
gulp.task('test', function () {
  return gulp.src('spec/**/*.html')
          .pipe(mochaPhantomJs());
});
 
gulp.task('dist', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

