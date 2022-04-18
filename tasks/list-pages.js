var fs   = require('fs'),
    path = require('path');

var listPages = function(gulp, options, plugins) {

    gulp.task('list-pages', function() {

        const walkDirectory = ( dir ) => {

          if ( !dir ) {
            return undefined;
          }

          if ( !fs.existsSync( dir ) ) {
            return undefined;
          }

          const fileList = {};

          function walk( dir ) {
            fs.readdirSync(dir)
              .filter(file => path.extname(file) == ".marko" || fs.statSync(path.join(dir, file)).isDirectory())
              .map(file => {
                if (fs.statSync(path.join(dir, file)).isDirectory()) {
                  if(file!=='components'){
                    fileList[file] = [];
                    walk(path.join(dir, file));
                  }
                } else {
                  const url = path.join(dir, file).split(path.sep).join('/').replace('src/', '').replace('.marko', '.html');
                  let name = path.basename(file, '.marko').split(/(?=[A-Z])/);
                  name = name.join(" ")
                  fileList[path.basename(dir)].push({url: url, name });
                }

              }
            );
          }

          walk( dir );

          return fileList;
        };

        var common = walkDirectory(`${options.config.src.root}/pages/`);

        return gulp.src('tools/index.marko')
            .pipe(plugins.data(function() {
                return {pages: {common: common}, pkg: options.pkg, buildTime: new Date() };
            }))
            .pipe(plugins.markoRender({
              writeToDisk: false,
              preserveWhitespace: true,
              ext: "html",
              onlyRenderPath: ""
            }))
            .pipe(plugins.notify({message: 'Index file rendered', onLast: true}))
            .pipe(gulp.dest(options.config.dist.root));
    });
};

module.exports = listPages;
