#!/usr/bin/env node

'use strict';

var minimist = require('minimist');
var filter = require('./../lib/filter');
var splitter = require('./../lib/splitter');

var args = minimist(process.argv.slice(2))['_'];
var options = {
  columns: args[0] || '*',
  conditions: args[1],
  format: args[2]
};

var onData = function(data) {
  try {
    var obj = JSON.parse(data);
    var output = filter(obj, options);
    if (output) {
      console.log(output);
    }    
  } catch(e) {
    console.log(e);
  }
};

var onError = function(err) {
  console.error(err);
};

var onEnd = function() {
  console.log('');
};

process.stdin.pipe(splitter)
  .on('data', onData)
  .on('error', onError)
  .on('end', onEnd);

process.on('uncaughtException', process.exit);

