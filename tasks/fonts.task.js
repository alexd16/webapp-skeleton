var gulp = require('gulp');
var karma = require('karma').server;

module.exports = function(config, lr, files){
  return {
    normal: function() {
      return gulp
        .src(files.vendorSrc)
        .pipe(gulp.dest(config.distPath+files.dest));
    }
  };
};