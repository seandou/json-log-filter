'use strict';

require('./ext');
require('./globals');

var FORMATS = ['plain', 'csv', 'json'];

module.exports = function(obj, options) {
  var columns = options.columns.trim();
  var conditions = options.conditions || '';
  var format = options.format;

  var _ = obj;
  var match = true;

  if (conditions.trim() != '') {
    match = eval(conditions);
  }

  if (!match) {
    return null;
  }

  var keys, output;
  if (columns == '*') {
    keys = Object.keys(obj);
  } else {
    keys = columns.split(',');
  }

  if (FORMATS.indexOf(format) == -1) {
    format = 'plain';
  }

  output = [];
  for(var i in keys) {
    if (obj[keys[i].trim()]) {
      output.push(obj[keys[i].trim()]);
    }
  }

  if (format == 'plain') {
    return output.join(' ');
  }

  if (format == 'json') {
    return JSON.stringify(output);
  }

  return obj;
};