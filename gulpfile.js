var gulp = require('gulp'),
 watch = require('gulp-watch'),
 postcss = require('gulp-postcss'),
 autoprefixer = require('autoprefixer'),
 cssvars = require('postcss-simple-vars'),
 nested = require('postcss-nested');

gulp.task('default', function(){
	console.log("Hooray you did a thing");
});

gulp.task('styles', function(){
	return gulp.src('.\\app\\assets\\styles\\styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('.\\app\\temp\\styles'));
});

gulp.task('html', function(){
	console.log("A new HTML wow");
});

gulp.task('watch', function(){
	watch('.\\app\\index.html', function(){
		gulp.start('html');
	});
	watch('.\\app\\assets\\styles\\**\*.css', function(){
		gulp.start('styles');
	});
	
});