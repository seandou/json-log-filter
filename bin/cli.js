#!/usr/bin/env node

'use strict';

var minimist = require('minimist');
var split = require('logmon').split;
var filter = require('./../lib/filter');

var args = minimist(process.argv.slice(2))['_'];
var options = {
  columns: args[0] || '*',
  conditions: args[1],
  format: args[2]
};

var onData = function(obj) {
  var output = filter(obj, options);
  if (output) {
    console.log(output);
  }
};

var onError = function(err) {
  console.error(err);
};

var onEnd = function() {
  console.log('');
};

process.on('SIGPIPE', process.exit);

process.stdin.pipe(split(JSON.parse))
  .on('data', onData)
  .on('error', onError)
  .on('end', onEnd);

process.on('uncaughtException', function() {});

