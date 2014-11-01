var gulp = require('gulp');
var karma = require('karma').server;

module.exports = function(config, lr, files){
  return {
    normal: function() {
      karma.start({
        configFile: config.configFile
      });
    }
  };
};