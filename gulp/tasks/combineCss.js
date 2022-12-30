/************************Start Import modules********************************/
// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

// ! minify css files
const cleanCSS = require('gulp-clean-css');

// ! autoprefix css files
const autoprefixer = require('gulp-autoprefixer');

// ! Concat Files
const concatCss = require('gulp-concat-css');
/************************End Import modules********************************/

function combineCss() {
	// ? scrap all (src) css files
    return gulp.src('src/harbor/css/*.css')
    // ? concat all css Files into one file
    .pipe(concatCss('style.min.css'))
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

module.exports = combineCss;