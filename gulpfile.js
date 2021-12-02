const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');


function minCss(){
    return gulp.src('./css/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'));
  }
function minHtml(){
    return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
}
function minImg(){
    return gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
}

exports.minCss = minCss;
exports.minHtml = minHtml;
exports.minImg = minImg;