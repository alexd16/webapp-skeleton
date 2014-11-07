var gulp = require('gulp');
var g = require('gulp-load-plugins')();
var runSequence = require('run-sequence').use(gulp);

module.exports = function(files) {
  gulp.task('watch', function() {
    gulp.watch(files.scripts.src, function() {
      runSequence('scripts', 'html');
    });
    gulp.watch(files.styles.src, function() {
      runSequence('styles', 'html');
    });
    gulp.watch(files.html.src, ['html']);
    gulp.watch(files.templates.src, ['templates']);
    gulp.watch(files.fonts.src, ['fonts']);
    gulp.watch(files.fonts.src, ['fonts']);
  });
};