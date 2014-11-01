var del = require('del');

module.exports = function(config){
  return {
    normal: function(cb) {
      return del([config.distPath],cb);    
    }
  };
};