var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var changed = require('gulp-changed');
var merge = require('merge-stream');
var _ = require('lodash');
var S = require('String');
var runSequence = require('run-sequence');

module.exports = function(config, lr, files){
  var src = files.src;
  var dest = config.distPath+files.dest;
  var task = {
    dev: function() {
      return styles({ compass: true, noCache: true, style: 'expanded', lineNumbers: true })
                .pipe(gulp.dest(dest));
    },
    prod: function() {
      return styles({ compass: true, noCache: true, style: 'compressed' })
                .pipe(gulp.dest(dest));
    },
    watch: function() {
      gulp.watch(sourcesByType('sass'), function() {
        runSequence('styles-dev', 'htmlBuild');
      });
      gulp.watch(sourcesByType('css'), function() {
         runSequence('styles-dev', 'htmlBuild'); 
      });
    }
  };

  function styles(options) {
    var cssStyles = gulp.src(sourcesByType('css'));
    var sassStyles = 
      gulp.src(sourcesByType('scss'))
          .pipe(sass(options))
          .on('error', function(err) { console.log(err.message); });
    return merge(cssStyles, sassStyles);
  }

  function sourcesByType(type) {
    var src = _.filter(files.src, function(f) { return S(f).endsWith(type); });
    var vendor = _.filter(files.vendorSrc, function(f) { return S(f).endsWith(type); });
    return _.union(src, vendor);
  }
  return task;
};