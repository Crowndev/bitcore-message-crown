'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-crown');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
