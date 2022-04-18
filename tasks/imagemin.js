const path = require('path');
const os = require('os');


var imagemin = function(gulp, options, plugins) {

  gulp.task('imagemin', function() {

    return gulp.src(options.config.paths.images + "/**/*.@(png|jpg|jpeg)")
      .pipe(plugins.tinypngUnlimited({
        cache: true,
        cachePath: path.join(os.tmpdir(), options.pkg.name + '-cache'),
        outputErrorLog: true,
        outputErrorFiles: false,
      })).on('error', plugins.notify.onError('Error: <%= error.message %>'))
      .pipe(plugins.notify({message: 'Images optimized', onLast: true}))
      .pipe(gulp.dest(options.config.paths.images))

    })
};

module.exports = imagemin;
