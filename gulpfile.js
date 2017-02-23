var gulp = require('gulp');
var shell = require('gulp-shell');
var browserify = require('browserify');
var vueify = require('vueify');
var babelify = require('babelify');
var fs = require('fs');

// gulp.task('start', shell([
// 	'nodemon server.js'
// ]));

gulp.task('browserify', function () {
	return browserify('./app.js')
        .transform(vueify)
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(fs.createWriteStream('./bundle/bundle.js'));
});

gulp.task('watch', function () {
  gulp.watch(['./**/*.vue', ' ./**/*.js', '!./node_modules'], ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);