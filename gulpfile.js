var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('js', function () {
	return gulp.src('./scripts/*.js')
			.pipe(gulp.dest('./build/src'))
});

gulp.task('sass', function () {
	return gulp.src('./styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./styles/*.scss', ['sass']);
});

gulp.task('default', ['js', 'css']);