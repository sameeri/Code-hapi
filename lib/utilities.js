var fs = require('fs'),
    path = require('path'),
    _ = require('lodash');

function getDirectories(srcpath) {
  function isDirectory(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  }    
  return _.filter(fs.readdirSync(srcpath), isDirectory);
}

module.exports = {
    getDirectories : getDirectories
}