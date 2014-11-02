var config = require('./config/app.js');
var files = require('./config/files.js');
var _ = require('lodash');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var lr = require('tiny-lr')();

var watches = [];

_(config.tasks).each(function(taskName){
  var taskFn = require('./tasks/'+taskName+'.task.js');
  var taskFiles = files[taskName];
  var task = taskFn(config, lr, taskFiles);
  if (task.dev) {
    gulp.task(taskName+'-dev', task.dev);
    gulp.task(taskName+'-prod', task.prod);
  } else {
    gulp.task(taskName, task.normal);
  }
  if (task.watch) {
    gulp.task('watch'+taskName, task.watch);
    watches.push('watch'+taskName);
  }
});

gulp.task('watch', watches);

gulp.task('dev', function(cb) {
  return runSequence('clean', ['scripts-dev', 'styles-dev', 'fonts', 'images', 'templates', 'watch'], 'htmlBuild', 'server', cb);
});

gulp.task('default', ['dev']);