var gulp = require('gulp');
var inject = require("gulp-inject");

module.exports = function(config){
  return function() {
    var scripts = gulp.src(config.srcScripts, { cwd: config.cwd, read: false });
    var styles = gulp.src(config.srcStyles, { cwd: config.cwd, read: false });
    return gulp
              .src(config.target)
              .pipe(inject(scripts))
              .pipe(inject(styles))
              .pipe(gulp.dest(config.dest));
  };
};