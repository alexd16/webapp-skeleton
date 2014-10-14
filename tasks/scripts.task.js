var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function(config){
  var dest = config.dest;
  return {
    dev: function() {
      return coffeeStream()
              .pipe (gulp.dest(dest));     
    },
    prod: function() {
      return coffeeStream()
              .pipe(concat('app.js'))
              .pipe(uglify())
              .pipe(gulp.dest(dest));
    }
  }

  function coffeeStream() {
    var src = config.src;
    return gulp
              .src(src)
              .pipe(coffee());
  }
}