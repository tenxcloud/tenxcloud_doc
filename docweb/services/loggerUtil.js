/*
* Licensed Materials - Property of tenxcloud.com
* (C) Copyright 2014 TenX Cloud. All Rights Reserved.
*/
/* Logger Utility */

/**
 * Logger definition
 */

var log4js = require('log4js');
var logger;
var level = "INFO";
var LOGPATH = './logs';
var fs = require('fs');

fs.stat(LOGPATH, function(err,stats) {
    if(err){
    fs.mkdir(LOGPATH, "0744", function() {
      // refresh configuration file every three minutes
      log4js.configure(require.resolve('../config/log4js.json'), {
        reloadSecs : 180
      });
    });
  } else {
    // refresh configuration file every three minutes
    log4js.configure(require.resolve('../config/log4js.json'), {
      reloadSecs : 180
    });
  }
});

exports.getLogger = function(name) {
  logger = log4js.getLogger(name);
  logger.setLevel(level);
  return logger;
};

exports.setLevel = function(_level) {
  level =  _level;
};
exports.getLevel = function() {
  return level;
};

exports.log4js = log4js;
