
var config = {};

config = {
  src: {
    root:         "src/",
    assets:       "src/assets/",
    data:         "src/assets/data/",
    images:       "src/assets/images/",
    videos:       "src/assets/videos/",
    scripts:      "src/assets/scripts/",
    styles:       "src/assets/styles/",
    sass:         "src/assets/sass/",
    fonts:        "src/assets/fonts/",
    svg:          "src/assets/svg/",
    sprite:       "src/assets/images/sprite",
  },
  dist: {
    root:         "web/",
    assets:       "web/assets/",
    images:       "web/assets/images/",
    scripts:      "web/assets/scripts/",
    styles:       "web/assets/styles/",
    fonts:        "web/assets/fonts/",
    sprite:       "web/assets/images/sprite/",
    videos:       "web/assets/videos/",
  },
  target: {
    svg:          "src/assets/svg/*.svg",
    elements:     "src/**/*.marko",
    pages:        "src/**/pages/**/*.marko",
    data:         "src/**/*.data.json",
    sass:         "src/**/*.scss",
    es6:          "src/**/*.es6",
    html:         "web/**/*.html",
  }
};

config.banner = "/* @build <%= date %> */ \n";

config.vendors = {};
config.vendors.js = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/fancybox/dist/jquery.fancybox.min.js',
  'bower_components/parsleyjs/dist/parsley.min.js',
  'bower_components/parsleyjs/dist/i18n/tr.js',
  'bower_components/lazysizes/lazysizes.min.js',
  'bower_components/lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js',
  'bower_components/headroom/dist/headroom.js',
  'src/assets/scripts/vendors/lax.js',
  'src/assets/scripts/vendors/chart.min.js',
];
config.vendors.css = [
  'bower_components/fancybox/dist/jquery.fancybox.min.css',
];

module.exports = config;
