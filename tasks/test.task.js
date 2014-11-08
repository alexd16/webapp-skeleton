var gulp = require('gulp');
var karma = require('karma').server;

module.exports = function(config){
  gulp.task('test', function() {
    karma.start({ configFile: config.karmaConfig });
  });
};
