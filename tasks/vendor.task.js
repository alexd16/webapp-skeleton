var gulp = require('gulp');
var merge = require('merge-stream');

module.exports = function(config){
  return function() {
    var jsStream = gulp.src(config.js).pipe(gulp.dest(config.jsDest));
    var cssStream = gulp.src(config.css).pipe(gulp.dest(config.cssDest));
    return merge(jsStream, cssStream);
  };
};