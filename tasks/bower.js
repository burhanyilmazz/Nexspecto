
var bower = function(gulp, options, plugins) {
  gulp.task('bower:js', function() {
    return gulp.src(options.config.vendors.js)
      .pipe(plugins.concat('vendors.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.notify({message: 'Vendors scripts have been created.', onLast: true}))
      .pipe(gulp.dest(options.config.dist.scripts));
  });

  gulp.task('bower:css', function() {
    return gulp.src(options.config.vendors.css)
      .pipe(plugins.concat('vendors.css'))
      .pipe(plugins.cleanCss())
      .pipe(plugins.notify({message: 'Vendors styles have been created.', onLast: true}))
      .pipe(gulp.dest(options.config.dist.styles));
  });
};

module.exports = bower;
