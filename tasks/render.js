var fs = require('fs');
var path = require('path');
var marko = require('marko');

var render = function(gulp, options, plugins) {

  gulp.task('render', function() {

    return gulp.src(options.config.target.elements)
      .pipe(plugins.data(function(file) {
        var dataFilePath = path.resolve(path.dirname(file.path), path.basename(file.path, ".marko") + '.data.json');
        if ( fs.existsSync(dataFilePath) ) {
          return JSON.parse(fs.readFileSync( dataFilePath ));
        }
        return {};
      }))
      .pipe(plugins.markoRender({
        writeToDisk: false,
        ext: "html",
        onlyRenderPath: "\\pages\\",
        preserveWhitespace: false
      })).on('error', plugins.notify.onError('Error: <%= error.message %>'))
      .pipe(plugins.notify({message: 'Template files rendered', onLast: true}))
      .pipe(gulp.dest(options.config.dist.root));
    })
};

module.exports = render;
