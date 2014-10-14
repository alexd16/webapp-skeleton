var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

module.exports = function(config){
  var src = config.src;
  var dest = config.dest;
  return {
    dev: function() {
      return gulp
                .src(src)
                .pipe(sass({compass: true}))
                .pipe(gulp.dest(dest));
    },
    prod: function() {
      return gulp
                .src(src)
                .pipe(sass({compass: true, style: 'compressed'}))
                .pipe(gulp.dest(dest));
    }
  }
}