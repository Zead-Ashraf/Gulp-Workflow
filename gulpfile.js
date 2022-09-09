// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

const { parallel } = require('gulp');

/*********************************Start Import Tasks*********************************************/

// ! minify html files
const minHtml = require("./gulp/tasks/minHtml.js")

// ! minify css files
const minCss = require("./gulp/tasks/minCss.js");

// ! Watch File if it had changed and perform action given to it
const watchFiles = require("./gulp/tasks/watchFiles.js");

/*********************************End Import Tasks**********************************************/

function main() {
	watchFiles(["src/css/*.css"], minCss);
	watchFiles(["src/*.html"], minHtml);
}

exports.default = main;