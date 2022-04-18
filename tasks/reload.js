var reload = function(gulp, options, plugins) {

  gulp.task('reload:styles', gulp.series('styles'), function() {
    return gulp.src(options.config.target.sass)
      .pipe(plugins.connect.reload())
      .pipe(plugins.notify({message: 'Styles Reloaded', onLast: true}));
  });

};

module.exports = reload;
