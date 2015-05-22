'use strict';

var bower = require('bower');

module.exports = function(gulp, opts) {
  gulp.task('bower-install', function (cb) {
    bower.commands.install([], {save: true}, {})
      .on('end', function(installed) {
        console.log(installed);
        cb();
      });
  });
};
