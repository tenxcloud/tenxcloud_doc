/*
* Licensed Materials - Property of tenxcloud.com
* (C) Copyright 2014 TenX Cloud. All Rights Reserved.
*/
/**
* Web front page router
* @Author huangqg
*/

var util = require('../services/requestUtil');
var fs = require('fs');
var url = require('url');
var logger = require('../services/loggerUtil.js').getLogger("index");

var bookpath = '_book';
exports.index = function(req, res) {
  var mehtod = 'doc';
  // res.redirect('/doc/平台介绍.html',{loginUser : req.user});
  var pathname = url.parse(req.url).pathname;
  /*if(pathname === '/doc/index.html'){
    res.render('doc/doc', {loginUser: req.user, docPath: './index.html'});
    return;
  }*/
  var realPath = global.VIEWSPATH + pathname;
  // if(realPath.substr(realPath.length - 1) === '/'){
  if(realPath.indexOf('.') < 0){
    if(realPath.substr(realPath.length - 1) === '/'){
      realPath += 'index.html';
      pathname += 'index.html';
    } else {
      realPath += '/index.html';
      pathname += '/index.html';
    }
  }
  logger.debug(mehtod, 'realPath:' + realPath);
  fs.exists(realPath, function (exists) {
    if (!exists) {
      res.redirect('/doc/index.html');
    } else {
      var docPath = pathname.substr(5);
      logger.debug(mehtod, 'docPath:' + docPath);
      res.render('doc/doc', {docPath: docPath});
    }
  });
}

exports.welcome = function(req, res){
  //res.render('doc/doc', {docPath: 'index.html'});
  res.redirect('/doc');
}

/**
exports.redirectDoc = function(req, res){
  res.redirect('http://doc.tenxcloud.com');
}
**/
