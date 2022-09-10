// * What this script do :
    // ? perform autoprefixing
    // ? perform minifiying
    // ? concat all css Files into one file
/*****************************************************************************/

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
    // ? concat all css Files into one file
    /* ! you need to keep your (href) of the (rel) element **Compatiable** with this name*/
    .pipe(concatCss('style.min.css'))
    // ? perform minifiying
    .pipe(
        cleanCSS({compatibility: 'ie8'})
    )
    // ? output Files
    .pipe(gulp.dest('build/css'));
}

module.exports = styleCss;