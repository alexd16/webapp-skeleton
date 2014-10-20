var gulp = require('gulp');
var karma = require('karma').server;

module.exports = function(config){
  return function() {
    karma.start({
      configFile: config.configFile
    });
  };
};