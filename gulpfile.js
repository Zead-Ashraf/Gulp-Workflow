// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

const { parallel } = require('gulp');

// minify html files
const htmlmin = require('gulp-htmlmin');

// minify css files
const cleanCSS = require('gulp-clean-css');

// notify mesaages

const notify = require("gulp-notify");

function minHtml() {
	return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

function minCss() {
	return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
}

function watchFiles() {
	gulp.watch(["src/css/*.css"], minCss);
	gulp.watch(["src/*.html"], minHtml);
	
}

function main() {
	watchFiles()
}

exports.default = main;
