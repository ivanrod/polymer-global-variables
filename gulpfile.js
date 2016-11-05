var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

gulp.task('build', function() {
  gulp.src('./index.js')
    .pipe(rename('polymer-global-variables.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('polymer-global-variables.min.js'))
    .pipe(gulp.dest('dist'))
});
