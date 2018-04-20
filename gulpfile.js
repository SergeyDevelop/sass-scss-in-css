var gulp = require('gulp'), // Connect Gulp
		sass = require('gulp-sass'); // connect the Sass package
		
gulp.task('sass', function() { // Create a Task "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Take the source
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Convert Sass to CSS using gulp-sass
		.pipe(gulp.dest('css')) // Unload the result in the folder css
	});

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Watching sass files in the sass folder
});

gulp.task('default', ['watch']);