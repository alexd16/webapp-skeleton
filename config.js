var root = process.cwd();
var srcFolder = root+'/app';
var buildFolder = root+'/dist';
var vendorFolder = root+'/vendor';
var libFolder = root+'/lib';
module.exports = {
  name: 'Application',
  srcFolder: srcFolder,
  buildFolder: buildFolder,
  vendorFolder: vendorFolder,
  libFolder: libFolder,
  styles: {
    src: [srcFolder+'/**/*.scss'],
    dest: buildFolder+'/app/css'
  },
  scripts: {
    src: [srcFolder+'/**/*.coffee', '!'+srcFolder+'/**/*.spec.coffee'],
    dest: buildFolder+'/app/js'
  },
  htmlBuild: {
    target: srcFolder+'/index.html',
    cwd: buildFolder,
    srcScripts: ['app/**/*.js'],
    srcStyles: ['app/**/*.css'],
    dest: buildFolder
  },
  server: {
    root: buildFolder,
    proxy: {
      forwardTo: 'localhost:3000'
    }
  },
  test: {
    configFile: root+'/karma.conf.js'
  }
};