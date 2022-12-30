// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

const { parallel , series } = require('gulp');

/*********************************Start Import Tasks*********************************************/

// ! minify html files
const minHtml = require("./gulp/tasks/minHtml.js")

// ! minify css files
const styleCss = require("./gulp/tasks/styleCss.js");

// ! Watch File if it had changed and perform action given to it
const watchFiles = require("./gulp/tasks/watchFiles.js");

const combineCss = require("./gulp/tasks/combineCss.js");

/*********************************End Import Tasks**********************************************/

// ! impoerting Pug Script
require("./gulp/tasks/pugTask.js");

// ! impoerting Sass Script
require("./gulp/tasks/sassTask.js");


function main() {
	watchFiles(["src/*.html"], minHtml);
	watchFiles(["src/css/*.css"], series(styleCss,combineCss));
}

// ! when you want to achive an other task you need to call (defualt) task by name
exports.default = main;
