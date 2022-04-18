
var assetsTransfer = function(gulp, options, plugins) {

  gulp.task('assets-transfer:common', function() {
    return gulp.src([
        `${options.config.src.data}/**`,
        `${options.config.src.fonts}/**`,
        `${options.config.src.images}/**`,
        `${options.config.src.videos}/**`,
      ], { base: options.config.src.assets })
      .pipe(plugins.notify({message: 'Common assets have been transfered.', onLast: true}))
      .pipe(gulp.dest(options.config.dist.assets));
  });

};

module.exports = assetsTransfer;

