// * What this script do :
    // ? add pug support using (pug task)
    // ? call it using (pug task)

/************************Start Import modules********************************/
// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

// ! Watch File if it had changed and perform action given to it
const watchFiles = require("./watchFiles.js");

// ! Support pug syntax and compiling
const pugModule = require('gulp-pug');

/************************End Import modules********************************/

function supportPug() {
	// ! you can use files from other pathes as (pug modules) as it won't be compiled
	return gulp.src('./src/*.pug')
    .pipe(
      pugModule({})
    )
    .pipe(gulp.dest('./build'));
}

// ! add pug task
gulp.task("pug", () => {
  // ! watch pug files
	watchFiles(['./src/*.pug'], supportPug)
});