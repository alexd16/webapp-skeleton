var gulp = require('gulp');
var express = require('express');
var connect = require('connect-livereload');
var request = require('request');

module.exports = function(config, lr) {
  gulp.task('server', function() {
    var app = express();
    var apiStubRouter = express.Router();
    app.use(connect());
    app.use(express.static(config.distPath));
    
    var apiStubRouterFn = require(process.cwd()+'/config/apiStub.js').routes;
    apiStubRouterFn(apiStubRouter);
    app.use(config.apiPrefix, apiStubRouter);
    var proxyOptions = config.apiProxy;
    if (proxyOptions.enabled) {
      app.use(config.apiPrefix, function(req, res) {
        var url = proxyOptions.host+req.url;
        var options = {
          url: url,
          headers: req.headers
        }
        req.pipe(request(options)).pipe(res);
      });
    }
    app.listen(8000);
    lr.listen(35729);
  })
};