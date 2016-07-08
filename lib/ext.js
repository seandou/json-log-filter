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

  return str;
};

var pad = function(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
};

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var REGEXP_TIME_LOCAL=/^([0-9]{2})\/([a-zA-Z]+)\/([0-9]{4}):([0-9]{2}):([0-9]{2}):([0-9]{2}) ([\+\-0-9]+)$/;

String.prototype.range = function(from, to) {
  var from = formateDate(from || '1970-01-01');
  var to = formateDate(to || '2999-12-31');
  var thisDate = this;

  if (thisDate.match(REGEXP_TIME_LOCAL)) {
    thisDate = thisDate.replace(REGEXP_TIME_LOCAL, function(m,day,month,year,hour,minute,second,timezone) {
      month = pad(monthNames.indexOf(month)+1, 2);
      return year+'-'+month+'-'+day+'T'+hour+':'+minute+':'+second+timezone;
    });
  } 

  thisDate = new Date(thisDate);
  from = new Date(from);
  to = new Date(to);

  return thisDate >= from && thisDate < to;
};

var BOT_LIST = [
  'spider',
  'googlebot',
  'baiduspider',
  'bingbot',
  'yisouspider',
  'msnbot',
  'applebot',
  'twitterbot',
  'slackbot',
  'telegrambot',
  'facebookexternalhit',
  'linkedinbot',
  'slurp',
  'gurujibot',
  'yandexbot',
].join('|');

String.prototype.isBot = function(ua) {
  return new RegExp(BOT_LIST, 'i').test(ua);
};
