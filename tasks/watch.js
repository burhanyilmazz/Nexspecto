
var watch = function(gulp, options, plugins) {
    gulp.task('watch', function() {

        // watch template files
        gulp.watch(options.config.target.elements, gulp.series('render'));

        // watch data(json) of tpl files
        gulp.watch(options.config.target.data, gulp.series('render'));

        // watch sass files
        gulp.watch(options.config.target.sass, gulp.series('styles'));

        // watch scripts
        gulp.watch(options.config.target.es6, gulp.series('scripts'));
        gulp.watch(`${options.config.src.scripts}/app.js`, gulp.series('scripts'));

        // watch sprite folder
        gulp.watch(options.config.src.sprite, gulp.series('sprite'));

        // watch svg folder
        gulp.watch(options.config.src.svg, gulp.series('icons'));

    });
};

module.exports = watch;
