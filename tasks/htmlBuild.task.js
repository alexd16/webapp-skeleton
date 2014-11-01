var gulp = require('gulp');
var inject = require("gulp-inject");
var refresh = require('gulp-livereload');

module.exports = function(config, lr, files){
  return {
    normal: function() {
      var scripts = gulp.src(files.srcScripts, { cwd: config.distPath, read: false });
      var styles = gulp.src(files.srcStyles, { cwd: config.distPath, read: false });
      return gulp
                .src(files.target, { cwd: config.srcPath })
                .pipe(inject(scripts))
                .pipe(inject(styles))
                .pipe(gulp.dest(config.distPath))
                .pipe(refresh(lr));
    }
  };
};