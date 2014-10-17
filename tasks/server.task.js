var gulp = require('gulp');
var express = require('express');

module.exports = function(path){
  return function() {
    var app = express();
    app.use(express.static(path));
    app.listen(8000);
  };
};