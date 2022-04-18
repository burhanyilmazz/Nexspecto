var buffer = require('vinyl-buffer');

var sprite = function(gulp, options, plugins) {
  gulp.task('sprite', function () {
    var spriteData = gulp.src(`${options.config.src.sprite}/*.png`).pipe(plugins.spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      retinaSrcFilter: [`${options.config.src.sprite}/*@2x.png`],
      retinaImgName: 'sprite@2x.png',
      padding: 10,
      cssTemplate: 'tools/sprite.hb'
    })).on('error', plugins.notify.onError('Error: <%= error.message %>'));

    return spriteData
      .pipe(buffer())
      .pipe(plugins.notify({message: 'Sprite Completed', onLast: true}))
      .on('error', plugins.notify.onError('Error: <%= error.message %>'))
      .pipe(plugins.if('*.png', gulp.dest(options.config.dist.sprite)))
      .pipe(plugins.if('*.scss', gulp.dest(options.config.src.sass)))
  });

};

module.exports = sprite;
