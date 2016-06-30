'use strict';

var formateDate = function(str) {
  if (str == 0) {
    str = '1970-01-01 00:00:00';
  }

  if (!str.match(/-/)) {
    var now = new Date();
    var day = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate();
    str = day + ' ' + str;
  }

  return new Date(str);
};

String.prototype.range = function(from, to) {
  var from = formateDate(from || '1970-01-01');
  var to = formateDate(to || '2999-12-31');
  var thisDate = new Date(this);

  return thisDate >= from && thisDate < to;
};