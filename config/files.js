module.exports = {
  scripts: {
    src: [
      'bower_components/jquery/dist/jquery.js',
      'app/activities/another/sdfdsf.js',
      'app/zed1.js', 
      'app/**/*.coffee', 
      'app/**/*.js'
    ],
    filters: '!*.spec.*',
    dest: 'dist/js'
  },
  styles: {
    src: [
      'bower_components/bootstrap/dist/css/bootstrap.css',
      'app/**/main.scss'
    ],
    dest: 'dist/css'
  },
  templates: {
    src: 'app/**/*.html',
    filters: '!index.html',
    dest: 'dist/templates'
  },
  images: {
    src: 'app/images/**/*.+(png|jpg)',
    dest: 'dist/images'
  },
  fonts: {
    src: [
      'bower_components/bootstrap/fonts/*.+(eot|svg|ttf|woff)'
    ],
    dest: 'dist/fonts'
  },
  html:{
    src: 'app/index.html',
    dest: 'dist'
  }
};