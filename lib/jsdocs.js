/* ================================================================
 * jsdocs by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 16 2014 16:55:47 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

"use strict";

var path = require('path');
var join = path.join;
var sep = path.sep;
var extname = path.extname;
var fs = require('fs');
var util = require('xutil');
var fileUtil = util.file;
var minitpl = require('minitpl');
var mkdirp = require('mkdirp');
var template = path.join(__dirname, '..', 'template', 'page.tpl');
template = fs.readFileSync(template, 'utf-8');
var stylesheet = path.join(__dirname, '..', 'template', 'page.css');
stylesheet = fs.readFileSync(stylesheet, 'utf-8');
template = minitpl.compile(template);
var root = process.cwd();

function JsDocs(cfg){
  this.input = cfg.input;
  this.output = cfg.output;
  this.init();
}

var proto = JsDocs.prototype;

proto.init = function(){
  var that = this;
  var input = join(root, that.input);
  var output = join(root, that.output);
  if(!fileUtil.isExistedDir(output)){
    mkdirp(output);
  }

  fileUtil.traversal(input ,function(error, result){
    if (error){
      throw error;
    }
    that.list = that.generateList(result);
    result.forEach(function(i){
      that.createFile(i);
    });
  });
}

proto.createFile = function(data){
  if(extname(data.name) !== '.js'){
    return;
  }

  var d = util.noCacheRequire(data.src);
  var that = this;
  var dist = join(root, that.output, path.relative(that.input ,data.dir), data.name);

  var ctx = {
    name: data.name.replace('.js', ''),
    desc:'文件描述',
    list: this.list,
    fields: this.generateData(d),
    stylesheet:stylesheet
  }

  var dirname = path.dirname(dist);
  if(!fileUtil.isExistedDir(dirname)){
    mkdirp(dirname);
  }
  fileUtil.writeFile(dist.replace('.js', '.htm'), template(ctx));
}

proto.generateData = function(data){
  var res = [];
  util.each(data, function(i, key){
    res.push({
      name: key,
      type: typeof i,
      desc: 'desc'
    });
  });
  return res;
}

proto.generateList = function(result){
  var that = this;
  var res = [];
  result.forEach(function(i){
    var name = i.name;

    if(extname(name) !== '.js'){
      return;
    }
    var output = path.relative(root, that.output);
    var file = path.relative(that.input, i.src);
    res.push({
      name: name.replace('.js', ''),
      href: join(sep, output, file.replace('.js', '.htm'))
    });
  });
  return res;
}

module.exports = JsDocs;
