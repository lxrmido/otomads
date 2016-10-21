var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var less    = require('gulp-less');

gulp.task('webpack', function(){
	console.log('gulp:webpack');
	gulp.src('src/**/*.js')
			.pipe(webpack(require('./webpack.build.js')))
			.pipe(gulp.dest('./'));
});

gulp.task('less', function(){
	console.log('gulp:less');
	gulp.src('less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('res', function(){
	console.log('gulp:res');
	gulp.src('res/**/*')
		.pipe(gulp.dest('./dist/res/'));
});

gulp.task('watch', function(){
	gulp.watch('res/**/*', ['res']);
	gulp.watch('less/**/*.less', ['less']);
	gulp.watch('src/**/*.js', ['webpack']);
});