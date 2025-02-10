const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const dartSass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(dartSass({ outputStyle: 'compressed' })
        .pipe(gulp.dest('./build/styles'))
}

function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripits/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripits'))
}

exports.sass = compilaSass
exports.imagemin = comprimeImagem
exports.uglify = comprimeJavaScript
