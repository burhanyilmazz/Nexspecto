var prettify = function(gulp, options, plugins) {

  gulp.task('prettify:html', function () {
    return gulp.src(options.config.target.html).pipe(
      plugins.htmlBeautify({
        indentSize: 2
      })
    )
    .pipe(plugins.notify({message: 'Html files have been prettified.', onLast: true}))
    .pipe(gulp.dest(options.config.dist.root))
  });

};

module.exports = prettify;
