const gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	rigger = require('gulp-rigger');

	gulp.task('sass', () => {
	  return gulp.src('src/scss/styles.scss')
	    .pipe(sass({errLogToConsole: true}))
	    .pipe(gulp.dest('build/css'));
	});

	gulp.task('build-html', function () {
	    gulp.src('src/index.html') //Выберем файлы по нужному пути
	        .pipe(rigger()) //Прогоним через rigger
	        .pipe(gulp.dest('build')) //Выплюнем их в папку build
	});

	gulp.task('watch', function(){
		gulp.watch('src/scss/**/*.scss', ['sass']);
		gulp.watch('src/**/*.html', ['build-html']);
	});
