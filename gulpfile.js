const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/static/compiled'));
});

gulp.task('sass-watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});
