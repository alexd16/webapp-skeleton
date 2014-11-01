module.exports = {
  scripts: {
    src: ['app/**/*.coffee', 'app/**/*.js', '!app/**/*.spec.coffee', '!app/**/*.spec.coffee'],
    vendorSrc: [
      'bower_components/jquery/dist/jquery.js'
    ],
    dest: '/js'
  },
  styles: {
    src: ['app/**/*.scss'],
    vendorSrc: [
      'bower_components/bootstrap/dist/css/bootstrap.css'
    ],
    dest: '/css'
  },
  htmlBuild: {
    target: 'index.html',
    srcScripts: ['js/**/*.js'],
    srcStyles: ['css/**/*.css']
  },
  server: {
    routes: '/config/serverRoutes.js'
  }
};