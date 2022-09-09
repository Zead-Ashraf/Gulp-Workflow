// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

// ! minify html files
const htmlmin = require('gulp-htmlmin');

function minHtml() {
    // ? scrap all (src) html files
	return gulp.src('./src/*.html')
    // ? perform minifiying
    .pipe(htmlmin({ collapseWhitespace: true }))
    // ? output Files
    .pipe(gulp.dest('build'));
}

module.exports = minHtml;