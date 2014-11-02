var gulp = require('gulp');

module.exports = function(config, lr, files){
  return {
    normal: function() {
      return gulp
        .src(files.src)
        .pipe(gulp.dest(config.distPath+files.dest));
    },
    watch: function() {
      gulp.watch(files.src, ['images']);
    }
  };
};