var config = require('./config/app.js');
var files = require('./config/files.js');
var gulp = require('gulp');
var _ = require('lodash');
var lr = require('tiny-lr')();
var runSequence = require('run-sequence').use(gulp);

require('./tasks/build.task')(files, lr);
require('./tasks/watch.task')(files);
require('./tasks/server.task')(config, lr);
require('./tasks/test.task')(config);

gulp.task('serve', function(cb){
  return runSequence('build', ['watch', 'server'], cb);
});
gulp.task('default', ['serve']);
