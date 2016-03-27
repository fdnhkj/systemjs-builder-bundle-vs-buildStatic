var gulp = require('gulp');
var Builder = require('systemjs-builder');

gulp.task('default', function() {
  var builder = new Builder({
    baseURL: './',
    defaultJSExtensions: true
  });
  builder.buildStatic('moduleA/entryPoint', 'dist/moduleA/bundle.js').catch(function(errorA) {
    console.log('error A : ' , errorA);
  });
  builder.bundle('moduleB/entryPoint', 'dist/moduleB/bundle.js').catch(function(errorB) {
    console.log('errorB : ' , errorB);
  });
});
