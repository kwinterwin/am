var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () {
    gulp.src('./project/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./project/style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./project/style/**/*.scss', ['sass']);
});