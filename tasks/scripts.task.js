var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var merge = require('merge-stream');
var S = require('string');
var _ = require('lodash');
var runSequence = require('run-sequence');

module.exports = function(config, lr, files){
  var dest = config.distPath+files.dest;
  var task = {
    dev: function() {
      return scripts()
              .pipe(gulp.dest(dest));  
    },
    prod: function() {
      return scripts()
              .pipe(concat('app.js'))
              .pipe(uglify())
              .pipe(gulp.dest(dest));
    },
    watch: function() {
      gulp.watch(sourcesByType('coffee'), function() {
        runSequence('scripts-dev', 'htmlBuild');
      });
      gulp.watch(sourcesByType('js'), function() {
         runSequence('scripts-dev', 'htmlBuild'); 
      });
    }
  };

  function scripts() {
    var jsScripts = gulp.src(sourcesByType('js'));
    return merge(compiledScripts(), jsScripts);
  }

  function compiledScripts() {
    return gulp
              .src(sourcesByType('coffee'))
              .pipe(changed(dest))
              .pipe(coffee())
              .on('error', function() {});
  }

  function sourcesByType(type) {
    var src = _.filter(files.src, function(f) { return S(f).endsWith(type); });
    var vendor = _.filter(files.vendorSrc, function(f) { return S(f).endsWith(type); });
    return _.union(src, vendor);
  }

  return task;
};