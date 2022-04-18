var icons = function(gulp, options, plugins) {
  gulp.task('icons', function() {

    var timestamp = Math.round(Date.now() / 1000);

    return gulp.src([options.config.target.svg])
      .pipe(plugins.iconfont({
        fontName: 'IconFont',
        formats: ['ttf', 'eot', 'woff'],
        timestamp: timestamp,
        normalize: true,
        fontWeight: 'bolder',
        fontHeight: 1001
      }))
      .on('glyphs', function(glyphs) {
        gulp.src('tools/icons.scss.marko')
          .pipe(plugins.data(function(file) {
            return {
              glyphs: glyphs,
              prefix: 'icon-'
            };
          }))
          .pipe(plugins.markoRender({
            writeToDisk: false,
            preserveWhitespace: true,
            onlyRenderPath: "",
            ext: "scss"
          }))
          .pipe(plugins.rename('_icons.scss'))
          .pipe(gulp.dest(options.config.src.sass));

        gulp.src('tools/icons.json.marko')
          .pipe(plugins.data(function(file) {
            return {
              glyphs: glyphs,
              prefix: 'icon-'
            };
          }))
          .pipe(plugins.markoRender({
            writeToDisk: false,
            preserveWhitespace: true,
            onlyRenderPath: "",
            ext: "json"
          }))
          .pipe(plugins.rename('Icons.data.json'))
          .pipe(gulp.dest(`${options.config.src.root}/pages/Atoms/`));
      })
      .pipe(plugins.notify({message: 'Icons file created', onLast: true}))
      .pipe(gulp.dest(options.config.dist.fonts));
    });
};

module.exports = icons;
