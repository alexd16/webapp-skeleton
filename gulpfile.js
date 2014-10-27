var config = require('./config.js');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var lr = require('tiny-lr')();
var refresh = require('gulp-livereload');

//** Tasks **//
var scriptsTask = require('./tasks/scripts.task.js')(config.scripts);
var stylesTask = require('./tasks/styles.task.js')(config.styles);
var htmlBuildTask = require('./tasks/htmlBuild.task.js')(config.htmlBuild);
var serverTask = require('./tasks/server.task.js')(config.server, lr);
var testTask = require('./tasks/test.task.js')(config.test);
//** End Tasks **//

gulp.task('scripts-dev', function(){ 
  return scriptsTask.dev().pipe(refresh(lr));
});
gulp.task('styles-dev', function(){
  return stylesTask.dev().pipe(refresh(lr));
});
gulp.task('scripts-prod', scriptsTask.prod);
gulp.task('styles-prod', stylesTask.prod);
gulp.task('htmlBuild', function() {
  return htmlBuildTask().pipe(refresh(lr));
});
gulp.task('server', serverTask);

gulp.task('watch', function() {
  gulp.watch(config.scripts.src, function(event) {
    runSequence('scripts-dev', 'htmlBuild');
  });
  gulp.watch(config.styles.src, function(event) {
    runSequence('styles-dev', 'htmlBuild');
  });
  gulp.watch(config.htmlBuild.target, ['htmlBuild']);
});

gulp.task('clean', function(cb) {
  return del([config.buildFolder],cb);
});

gulp.task('test', testTask);

gulp.task('dev', function(cb) {
  return runSequence('clean', ['scripts-dev', 'styles-dev', 'watch'], 'htmlBuild', 'server', cb);
});

gulp.task('prod', function() {
  return runSequence('clean', ['scripts-prod', 'styles-prod'], 'htmlBuild');
});

gulp.task('default', ['dev']);
