#!/usr/bin/env node

var exec = require('child_process').exec;
 
var child = exec('export NODE_ENV=dev', function (err, stdout, stderr) {
  if (err) throw err;
  console.log(process.env);
});