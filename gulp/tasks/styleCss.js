// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

// ! minify css files
const cleanCSS = require('gulp-clean-css');

// ! autoprefix css files
const autoprefixer = require('gulp-autoprefixer');

function styleCss() {
    // ? scrap all (src) css files
    return gulp.src('src/css/*.css')
    // ? perform autoprefixing
    .pipe(
        autoprefixer(
            { 
                grid: "autoplace"
            }
        )
    )
    // ? perform minifiying
    .pipe(
        cleanCSS({compatibility: 'ie8'})
    )
    // ? output Files
    .pipe(gulp.dest('build/css'));
}

module.exports = styleCss;