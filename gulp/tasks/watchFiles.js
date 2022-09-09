// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

// * Arguments :
  // ? Argument 1: The (path) of the file we want to watch 
  // ? Argument 2: the (task) we want to perform when file is changed

function watchFiles(path, task) {
	gulp.watch(path, task);	
}

module.exports = watchFiles;