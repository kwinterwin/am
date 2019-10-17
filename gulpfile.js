var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function (done) {
    gulp.src('./project/style/**/*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest('./project/style'));
        done();
});

gulp.task('watch', function () {
    gulp.watch('./project/style/**/*.scss', gulp.series('sass'));
});