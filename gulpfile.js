const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
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