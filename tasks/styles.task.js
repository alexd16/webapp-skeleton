var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var changed = require('gulp-changed');

module.exports = function(config){
  var src = config.src;
  var dest = config.dest;
  var task = {
    dev: function() {
      return gulp
                .src(src)
                .pipe(changed(dest))
                .pipe(sass({compass: true, noCache: true}))
                .on('error', function(err) { console.log(err.message); })
                .pipe(gulp.dest(dest));
    },
    prod: function() {
      return gulp
                .src(src)
                .pipe(sass({compass: true, style: 'compressed'}))
                .pipe(gulp.dest(dest));
    }
  };
  return task;
};