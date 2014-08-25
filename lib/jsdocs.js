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

'use strict';

var path = require('path');
var join = path.join;
var sep = path.sep;
var extname = path.extname;
var fs = require('fs');
var util = require('xutil');
var fileUtil = util.file;
var minitpl = require('minitpl');
var mkdirp = require('mkdirp').sync;

var template = path.join(__dirname, '..', 'template', 'page.tpl');
template = fs.readFileSync(template, 'utf-8');
template = minitpl.compile(template);

var stylesheet = path.join(__dirname, '..', 'template', 'page.css');
stylesheet = fs.readFileSync(stylesheet, 'utf-8');
stylesheet = compress(stylesheet);

var root = process.cwd();

function compress(content) {
  return content.replace(/\r|\n|\t/g,'');
}

function JsDocs(cfg) {
  this.input = path.resolve(cfg.input);
  this.output = path.resolve(cfg.output);
  this.init();
}

var proto = JsDocs.prototype;

proto.init = function() {
  var that = this;
  this.index = [];
  if(!fileUtil.isExistedDir(that.output))  mkdirp(that.output);
  fileUtil.traversal(that.input ,function(result) {
    if(extname(result) !== '.md') return;
    var relativePath = path.relative(that.input ,result);
    that.index.push(relativePath);
  });
  this.generate();
}

proto.generate = function() {
  var that = this;
  this.index.forEach(function(i) {
    that.renderFile(i);
  });
}

proto.renderFile = function(result) {
  var that = this;
  var dist = join(this.output, result);
    /*
  var listData = this.index.reverse();
  */
  var ctx = {
    fields: {},
    list: this.generateList(),
    stylesheet:stylesheet
  }

  var dirname = path.dirname(dist);
  if(!fileUtil.isExistedDir(dirname)) mkdirp(dirname);
  fileUtil.writeFile(dist.replace('.md', '.htm'), template(ctx));
}

proto.generateData = function(data) {
  var res = [];
  util.each(data, function(i, key) {
    res.push({
      name: key,
      type: typeof i,
      desc: 'desc'
    });
  });
  return res;
}

proto.generateList = function(result) {
  //var slideList = this.index.reverse();
  return
  var that = this;
  var res = [];
  result.forEach(function(i) {
    var name = i.name;

    if(extname(name) !== '.js') {
      return;
    }
    var file = path.relative(that.input, i.src);
    var dir = path.relative(root, that.output)
    res.push({
      name: name.replace('.js', ''),
      href: join(sep, dir, file.replace('.js', '.htm'))
    });
  });
  return res;
}

module.exports = JsDocs;

