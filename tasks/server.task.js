var baseDir = process.cwd();

var gulp = require('gulp');
var express = require('express');
var connect = require('connect-livereload');
var lr = require('tiny-lr')();
var request = require('request');


module.exports = function(config, lr){
  var stubs = require(config.proxy.stubs);
  return function() {
    var app = express();
    if (config.proxy) {
      app.use('/api', function(req, res){
        if (stubs[req.path]) {
          res.json(stubs[req.path]);
        } else {
          var path = 'http://localhost:3000'+req.url;
          console.log(path);
          req.pipe(request(path)).pipe(res);          
        }
      });
    }
    app.use(connect());
    app.use(express.static(config.root));
    app.listen(8000);
    lr.listen(35729);
  };
};