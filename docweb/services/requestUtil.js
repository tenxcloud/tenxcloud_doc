/*
* Licensed Materials - Property of tenxcloud.com
* (C) Copyright 2014 TenX Cloud. All Rights Reserved.
*/
var logger = require('../services/loggerUtil.js').getLogger("requestUtil");

function Util() {}

Util.prototype.okResponse = function (txtMessage, res) {
  res.writeHead(200, {
    'Content-Length': txtMessage.length,
    'Content-Type': 'text/plain'
  });
  res.write(txtMessage);
  res.end();
};


function getTextFromJson(json) {
  /*var txt = JSON.stringify (json, (function () {  // eliminate cirulcar nesting issues
    var visited = [];
    var didwe = function (val) {
      for (var i=0; i< visited.length; i++)
        if (visited[i] === val) return true;
      return false;
    };

    return function(key, value) {
      var v = value;
      if(typeof(value) == 'object' && didwe(value))
        v='[Circular]';

      visited.push(value);
      return v;
    };
  })());
  return txt;*/
  var method = 'getTextFromJson';
  var cache = [];
  var txt = JSON.stringify(json, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        logger.warn(method, 'Found a circular structure in JSON.');
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  return txt;
}

Util.prototype.okJsonResponse = function (json, res, code, headers) {
  var method = "okJsonResponse";
  if (json instanceof Error)
    json = { message: json.message };  // Errors do not serialize correctly.
  var txt = getTextFromJson(json);
  if (!code)
    code = 200;
  try {
    res.setHeader('Content-Type', 'application/json');
    if (headers) {
      for (var name in headers) {
        if (headers.hasOwnProperty(name)) {
          res.setHeader(name, headers[name]);
        }
      }
    }
    res.statusCode = code;
    res.write(txt);
    res.end();
  }
  catch (e) {
    logger.error(method, e);
    console.trace();
  }
};

Util.prototype.errResponse = function (json, res) {
  var rc;
  if (json instanceof Database.NotEntitledError)
    rc = Util.prototype.httpcode.FORBIDDEN;
  else if (json instanceof Profile.NotAuthorizedError)
    rc = Util.prototype.httpcode.UNAUTHORIZED;
  else if (json instanceof Util.prototype.JsonResponseError) {
    rc = json.code ? json.code : Util.prototype.httpcode.BAD_REQUEST;
  } else
    rc = Util.prototype.httpcode.BAD_REQUEST;

  exports.errCodeResponse(json, rc, res);
};

Util.prototype.errCodeResponse = function (json, code, res) {
  var method = "errCodeResponse";
  try {
    if (json.stack) {
      // It is an exception, print stack trace.
      logger.error(method, "Bad Request: "+json.stack);
      if ('function' != typeof json.toJSON)
        json = { message: json.toString()}; // Error objects don't serialize (JSON.stringify) into anything other than {}, which is not useful.
    } else
      logger.error(method, "Bad Request: ", json);
    res.writeHead(code, {'Content-Type': 'application/json'});
    res.write(JSON.stringify('function' != typeof json.toJSON ? json : json.toJSON()));
    res.end();
  }
  catch (e) {
    logger.error(method, e);
    console.trace();
  }
};

module.exports = exports = new Util();