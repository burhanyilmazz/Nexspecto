var gulp         = require('gulp'),
    extend       = require('util')._extend,
    pkg          = require('./package.json'),
    config       = require('./config'),
    options      = {pattern: ['./tasks/**/*.js']};

options = extend(options, {pkg: pkg, config: config});

require('load-gulp-tasks')(gulp, options);

gulp.task('default', gulp.parallel('watch'));
gulp.task('styles', gulp.parallel('styles'));
gulp.task('scripts', gulp.parallel('scripts'));
gulp.task('assets-transfer', gulp.parallel('assets-transfer:common'));
gulp.task('bower', gulp.parallel('bower:js', 'bower:css'));
gulp.task('build',
  gulp.series(
    gulp.parallel('icons', 'sprite'),
    gulp.parallel('styles', 'scripts'),
    gulp.series('render'),
    gulp.series('prettify:html'),
    gulp.parallel('bower', 'assets-transfer'),
    gulp.series('list-pages')
  )
);
