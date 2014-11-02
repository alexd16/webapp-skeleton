module.exports = {
  scripts: {
    src: [
      'app/**/*.coffee', 'app/**/*.js', '!app/**/*.spec.coffee', '!app/**/*.spec.coffee'
    ],
    vendorSrc: [
      'bower_components/jquery/dist/jquery.js'
    ],
    dest: '/assets/js'
  },
  styles: {
    src: ['app/**/*.scss'],
    vendorSrc: [
      'bower_components/bootstrap/dist/css/bootstrap.css'
    ],
    dest: '/assets/css'
  },
  fonts: {
    src: [],
    vendorSrc: [
      'bower_components/bootstrap/fonts/*.+(eot|svg|ttf|woff)',
    ],
    dest: '/assets/fonts'
  },
  images: {
    src: ['app/assets/images/**/*'],
    dest: '/assets/images'
  },
  htmlBuild: {
    target: 'index.html',
    srcScripts: [
      'assets/js/**/*.js'
    ],
    srcStyles: ['assets/css/**/*.css']
  },
  server: {
    routes: '/config/serverRoutes.js'
  },
  templates: {
    src: ['app/**/*.html', '!app/index.html'],
    dest: '/templates'
  }
};