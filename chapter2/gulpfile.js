const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
	// run ESLint
	gulp.src(["js/**/*.js", "public/js/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	// Node source
	gulp.src("js/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));

	// Browser source
	gulp.src("public/js/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});