/*
* Licensed Materials - Property of tenxcloud.com
* (C) Copyright 2015 TenxCloud. All Rights Reserved.
*/

var loggerUtil = require('./services/loggerUtil.js');
// Defaults to INFO for development purpose
var level = "INFO";
global.DEV_MODE = false;
// Read log level from command line
process.argv.forEach(function(arg, i, argv) {
  var logKey = "--log-level=";
  if (arg.indexOf(logKey) > -1) {
    argLevel = arg.substring(logKey.length,arg.length).trim();
    level = (loggerUtil.log4js.levels.toLevel(argLevel) !== undefined ? loggerUtil.log4js.levels.toLevel(argLevel) : level);
  }
  if (arg === "--dev-mode") {
    global.DEV_MODE = true;
  }
});

// log4js will validate the log level
loggerUtil.setLevel(level);
// Use the logger
var logger = loggerUtil.getLogger("app.js");

/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');
var ver = require('./package.json').version;
var compress = require('compression');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');


//override console functions to provide date/time information in the logs and to put console.log to stderr instead of stdout
var console_log = console.log;
console.log = function(){
  var date = new Date();
  var tmp=process.stdout;
  process.stdout=process.stderr;
  console_log.apply(console, ['[', date.toLocaleString(), ']'].concat(Array.prototype.slice.call(arguments)));
  process.stdout=tmp;

};
var console_error = console.error;
console.error = function(){
  var date = new Date();
  console_error.apply(console, ['[', date.toLocaleString(), ']'].concat(Array.prototype.slice.call(arguments)));
};
var console_warn = console.warn;
console.warn = function(){
  var date = new Date();
  console_warn.apply(console, ['[', date.toLocaleString(), ']'].concat(Array.prototype.slice.call(arguments)));
};
var console_info = console.info;
console.info = function(){
  var date = new Date();
  console_info.apply(console, ['[', date.toLocaleString(), ']'].concat(Array.prototype.slice.call(arguments)));
};


/**
 * TODO: Add alert
 *
 * Catch unexpected exceptions.  If we hit one, log it
 * and mark the server as down
 */
var serverDown = false;
process.on('uncaughtException', function (err) {
  var method = "uncaughtException";
  //serverDown = true;
  logger.error(method, 'Unexpected exception: ' + err);
  logger.error(method, 'Unexpected exception stack: ' + err.stack);
});


var app = express();

app.use(compress());
app.use(express.static(path.join(__dirname, 'static')));
app.use(require('cookie-parser')('p0o9i8u71q2w3e4r'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

global.VIEWSPATH = 'views';

app.use(session({
  secret: 'p0o9i8u71q2w3e4r',
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'));
app.use(require('method-override')());

app.set('port', 3002);
app.set('host', 'localhost');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate-var'));

// routes
app.get('/', routes.welcome);
app.get('/index.html', routes.redirectDoc);
app.get('/doc', routes.index);
app.get('/doc/:version', routes.index);
app.get('/doc/:version/:pathone', routes.index);
app.get('/doc/:version/:pathone/:pathtwo', routes.index);

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  logger.info('Starting http server');
  logger.info(app.get('host') + ': server listening on port ' + app.get('port'));
})

