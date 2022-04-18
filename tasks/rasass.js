
var styles = function(gulp, options, plugins) {

  gulp.task('styles', () => gulp.series('styles'));

  gulp.task('styles', function() {
    return gulp.src(`${options.config.src.sass}/style.scss`)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sassGlob())
      .pipe(plugins.sass({
          outputStyle: 'expanded'
      }))
      .on('error', plugins.notify.onError('Error: <%= error.message %>'))
      .pipe(plugins.rename('app.css'))
      .pipe(plugins.header(options.config.banner, {date: new Date()}))
      .pipe(plugins.autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
      }))
      .pipe(plugins.sourcemaps.write())
      .pipe(plugins.notify({message: 'Sass styles completed', onLast: true}))
      .pipe(gulp.dest(options.config.dist.styles))
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(plugins.cleanCss())
      .pipe(gulp.dest(options.config.dist.styles));
  });

};

module.exports = styles;
