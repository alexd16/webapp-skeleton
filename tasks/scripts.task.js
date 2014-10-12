var gulp = require('gulp');
var coffee = require('gulp-coffee');

module.exports = function(config){
  return function() {
    var src = config.src;
    var dest = config.dest;
    return gulp
              .src(src)
              .pipe(coffee())
              .pipe(gulp.dest(dest));
  }
}