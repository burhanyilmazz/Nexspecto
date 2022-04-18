var buffer        = require('vinyl-buffer');
var browserify    = require('browserify');
var source        = require('vinyl-source-stream');

var scripts = function(gulp, options, plugins) {

  gulp.task("scripts", function () {
    return browserify({entries: `${options.config.src.scripts}/app.js`, debug: true, extensions: ".es6"})
      .transform("babelify")
      .bundle()
      .pipe(source("app.js"))
      .pipe(buffer())
      .on('error', plugins.notify.onError('Error: <%= error.message %>'))
      .pipe(plugins.notify({message: 'Scripts have been transpiled.', onLast: true}))
      .pipe(gulp.dest(options.config.dist.scripts))

      .pipe(plugins.uglify())
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest(options.config.dist.scripts))
    ;
  });

};

module.exports = scripts;

