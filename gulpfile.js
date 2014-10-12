var config = require('./config.js');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');

//** Tasks **//
var scriptsTask = require('./tasks/scripts.task.js')(config.scripts);
var stylesTask = require('./tasks/styles.task.js')(config.styles);
var htmlBuildTask = require('./tasks/htmlBuild.task.js')(config.htmlBuild);
//** End Tasks **//

gulp.task('scripts', scriptsTask);
gulp.task('styles', stylesTask);
gulp.task('htmlBuild', htmlBuildTask);
gulp.task('clean', function(cb) {
  del([config.buildFolder],cb);
});

gulp.task('default', function() {
  runSequence('clean', ['scripts', 'styles'], 'htmlBuild');
});