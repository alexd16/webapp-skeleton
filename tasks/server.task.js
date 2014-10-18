var gulp = require('gulp');
var express = require('express');
var connect = require('connect-livereload');
var lr = require('tiny-lr')();

module.exports = function(path, lr){
  return function() {
    var app = express();
    app.use(connect());
    app.use(express.static(path));
    app.listen(8000);
    lr.listen(35729);
  };
};