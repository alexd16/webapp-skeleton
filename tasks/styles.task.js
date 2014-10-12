var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

module.exports = function(config){
  return function() {
    var src = config.src;
    var dest = config.dest;
    return gulp
              .src(src)
              .pipe(sass())
              .pipe(gulp.dest(dest));
  }
}