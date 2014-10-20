var gulp = require('gulp');
var express = require('express');
var connect = require('connect-livereload');
var proxy = require('express-http-proxy');
var lr = require('tiny-lr')();

module.exports = function(config, lr){
  return function() {
    var app = express();
    if (config.proxy) {
      app.use('/api', proxy('localhost:3000', {
        forwardPath: function(req, res) {
          return require('url').parse(req.url).path;
        }
      }));
    }
    app.use(connect());
    app.use(express.static(config.root));
    app.listen(8000);
    lr.listen(35729);
  };
};