
var gulp = require('gulp');
var g = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del']
});
var runSequence = require('run-sequence').use(gulp);
var path = require('path');
var S = require('string');
var _ = require('lodash');

module.exports = function(files, lr) {
  var isProduction = g.util.env.type === 'production';
  gulp.task('scripts', function() {
    var configFilter;
    if(files.scripts.filters) {
      configFilter = g.filter(['**/*', files.scripts.filters]);
    }
    var coffeeFilter = g.filter('*.coffee');
    return gulp
            .src(files.scripts.src)
            .pipe(configFilter ? configFilter : g.util.noop())
            .pipe(coffeeFilter)
            .pipe(g.coffee())
            .on('error', g.util.log)
            .pipe(coffeeFilter.restore())
            .pipe(g.flatten())
            .pipe(isProduction ? g.concat('app.js') : g.util.noop())
            .pipe(isProduction ? g.uglify() : g.util.noop())
            .pipe(gulp.dest(files.scripts.dest));
  });

  gulp.task('styles', function() {
    var configFilter;
    if(files.styles.filters) {
      configFilter = g.filter(['**/*', files.styles.filters]);
    }
    var sassFilter = g.filter(['*.scss', '!_*.scss']);
    var cssFilter = g.filter('*.css', '*.map');
    var sassOptions = {
      style: 'expanded', 
      lineNumbers: true, 
      compass: true,
      sourcemapPath: files.styles.dest
    };
    if(isProduction) {
      sassOptions.style = 'compressed';
      sassOptions.lineNumbers = false;
    }
    return gulp
            .src(files.styles.src)
            .pipe(configFilter ? configFilter : g.util.noop())
            .pipe(sassFilter)
            .pipe(g.rubySass(sassOptions))
            .on('error', function (err) { console.log(err.message); })
            .pipe(sassFilter.restore())
            .pipe(cssFilter)
            .pipe(g.flatten())
            .pipe(isProduction ? g.concat('app.css') : g.util.noop())
            .pipe(isProduction ? g.minifyCss({keepSpecialComments: 0}) : g.util.noop())
            .pipe(gulp.dest(files.styles.dest));
  });

  gulp.task('templates', function() {
    var configFilter;
    if(files.templates.filters) {
      configFilter = g.filter(['**/*', files.templates.filters]);
    }
    return gulp
              .src(files.templates.src)
              .pipe(configFilter ? configFilter : g.util.noop())
              .pipe(gulp.dest(files.templates.dest))
              .pipe(g.livereload(lr));
  });


  gulp.task('fonts', function() {
    return gulp
              .src(files.fonts.src)
              .pipe(gulp.dest(files.fonts.dest))
              .pipe(g.livereload(lr));
  });

  gulp.task('images', function() {
    return gulp
              .src(files.images.src)
              .pipe(gulp.dest(files.images.dest))
              .pipe(g.livereload(lr));
  });

  gulp.task('clean', function() {
    return g.del(['dist']);
  });

  gulp.task('html', function() {
    var stylesStream = gulp.src(baseFiles(files.styles.src, 'css/', '.css'), { read: false, cwd: 'dist' });
    var scriptsStream = gulp.src(baseFiles(files.scripts.src, 'js/', '.js'), { read: false, cwd: 'dist' });
    return gulp
              .src(files.html.src)
              .pipe(g.inject(stylesStream))
              .pipe(g.inject(scriptsStream))
              .pipe(gulp.dest(files.html.dest))
              .pipe(g.livereload(lr));
  });

  gulp.task('build', function(cb) {
    return runSequence('clean', ['scripts', 'styles'], ['html', 'fonts', 'images', 'templates'], cb);
  });  

  function baseFiles(globArr, prefix, ext) {
    return _.map(globArr, function(glob) {
      var basename = path.basename(glob);
      return prefix+basename.split('.')[0]+ext;
    });
  }
};