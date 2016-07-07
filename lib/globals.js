'use strict';

global['base64Decode'] = function(str) {
  if (!str) return '';
  return new Buffer(str, 'base64').toString();
};

global['jsonDecode'] = function(str) {
  str = str.replace(/.*({[^}]+}).*/, '$1');
  try {
    return JSON.parse(str);
  } catch(e) {
    return {};
  }
};
