const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
	// Node source
	gulp.src("js/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));

	// Browser source
	gulp.src("public/js/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});