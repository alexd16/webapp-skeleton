var config = require('./config.js');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');

//** Tasks **//
var scriptsTask = require('./tasks/scripts.task.js')(config.scripts);
var stylesTask = require('./tasks/styles.task.js')(config.styles);
var htmlBuildTask = require('./tasks/htmlBuild.task.js')(config.htmlBuild);
var serverTask = require('./tasks/server.task.js')(__dirname+'/dist');
//** End Tasks **//

gulp.task('scripts-dev', scriptsTask.dev);
gulp.task('scripts-prod', scriptsTask.prod);
gulp.task('styles-dev', stylesTask.dev);
gulp.task('styles-prod', stylesTask.prod);
gulp.task('htmlBuild', htmlBuildTask);
gulp.task('server', serverTask);
gulp.task('clean', function(cb) {
  del([config.buildFolder],cb);
});

gulp.task('dev', function() {
  runSequence('clean', ['scripts-dev', 'styles-dev'], 'htmlBuild', 'server');
});

gulp.task('prod', function() {
  runSequence('clean', ['scripts-prod', 'styles-prod'], 'htmlBuild');
});

gulp.task('default', ['dev']);