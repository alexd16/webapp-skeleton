var gulp = require('gulp');
var express = require('express');
var connect = require('connect-livereload');
var request = require('request');


module.exports = function(config, lr, files){
  var serverRoutesFn = require(process.cwd()+files.routes).routes;
  return {
    normal: function() {
      var app = express();
      var apiRouter = express.Router();

      app.use(connect());  
      app.use(express.static(config.distPath));
      serverRoutesFn(apiRouter);
      app.use('/api', apiRouter);
      var proxyOptions = config.apiProxy;
      if (proxyOptions.enabled) {
        app.use('/api', function(req, res) {
          var path = 'http://'+proxyOptions.host+':'+proxyOptions.port+req.url;
          req.pipe(request(path)).pipe(res); 
        });        
      }
      
      app.listen(8000);
      lr.listen(35729);
    }
  };
};