var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function(config, lr, files) {
  return {
    normal: function() {
      return gulp
                .src(files.src)
                .pipe(gulp.dest(config.distPath+files.dest));
    },
    watch: function() {
      gulp.watch(files.src, function() {
        runSequence('templates', 'htmlBuild');
      });
    }
  };
};