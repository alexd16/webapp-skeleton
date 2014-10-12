var srcFolder = 'app';
var buildFolder = 'dist';
var vendorFolder = 'vendor';
var libFolder = 'lib';
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
    src: [srcFolder+'/**/*.coffee'],
    dest: buildFolder+'/app/js'
  },
  htmlBuild: {
    target: srcFolder+'/index.html',
    cwd: buildFolder,
    srcScripts: ['app/**/*.js'],
    srcStyles: ['app/**/*.css'],
    dest: buildFolder
  }
}