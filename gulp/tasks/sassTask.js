// * What this script do :
    // ? add sass support using (sass task)
    // ? call it using (sass task)

/************************Start Import modules********************************/
// const { dest, series, src, task, watch } = require('gulp');
const gulp = require('gulp');

const { parallel , series } = require('gulp');

// ! Watch File if it had changed and perform action given to it
const watchFiles = require("./watchFiles.js");

// ! Support sass syntax and compiling
const sassModule = require('gulp-sass')(require('sass'));

const combineCss = require("./combineCss.js");


/************************End Import modules********************************/

function supportSass() {
  // ! you can use files from other pathes as (sass modules) as it won't be compiled
  return gulp.src('./src/sass/*.scss')
    .pipe(sassModule({outputStyle: 'compressed'}).on('error', sassModule.logError))
    .pipe(gulp.dest('./src/harbor/css'));
};

// ! add sass task
gulp.task("scss", () => {
    // ! watch sass files
	watchFiles(["./src/sass/*.scss"], series(supportSass,combineCss))
});
