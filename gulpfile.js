'use strict';

var gulp = require('gulp');

var opts = require('./tasks/gulp-config.js')(gulp, {});

require('./tasks/install.js')(gulp, opts);
require('./tasks/watch.js')(gulp, opts);

gulp.task('default', ['main']);

gulp.task('install', ['npm-install', 'bower-install']);