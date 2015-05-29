var gulp    = require('gulp');
var del     = require('del');
var shell   = require('gulp-shell');

gulp.task('clean', function(cb) {
  del('dist', cb);
});

gulp.task('default', ['clean'], shell.task([
  'jspm bundle-sfx app/main -o dist/app.js',
  './node_modules/.bin/uglifyjs dist/app.js -o dist/app.min.js',
  './node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html'
]));