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
    dest: buildFolder+'/css'
  },
  scripts: {
    src: [srcFolder+'/**/*.coffee', '!'+srcFolder+'/**/*.spec.coffee'],
    dest: buildFolder+'/js'
  },
  htmlBuild: {
    target: srcFolder+'/index.html',
    cwd: buildFolder,
    srcScripts: ['js/jquery.js','js/bootstrap.js', '**/*.js'],
    srcStyles: ['**/*.css'],
    dest: buildFolder
  },
  server: {
    root: buildFolder,
    proxy: {
      forwardTo: 'localhost:3000',
      stubs: root+'/stubs.js'
    }
  },
  test: {
    configFile: root+'/karma.conf.js'
  },
  vendor: {
    css: [
      root+'/bower_components/bootstrap/dist/css/bootstrap.css'
    ],
    js: [
      root+'/bower_components/jquery/dist/jquery.js',
      root+'/bower_components/bootstrap/dist/js/bootstrap.js'
    ],
    jsDest: buildFolder+'/js',
    cssDest: buildFolder+'/css'
  }
};