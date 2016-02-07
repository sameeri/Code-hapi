'use strict';
var _ = require('lodash');
var path = require('path');
var utilities = require('../lib/utilities');

var routes = [];

var resourcesPath = path.resolve(__dirname, '../resources');
var resourceDirectories = utilities.getDirectories(resourcesPath);

_.each(resourceDirectories, function (resourceDirectory){
  if(resourceDirectory === 'friends'){
    var resourceDirectoryPath = path.resolve(resourcesPath, resourceDirectory);
    var operationDirectories = utilities.getDirectories(resourceDirectoryPath);
    _.each(operationDirectories, function(operationDirectory){
       var operationDirectoryPath = path.resolve(resourceDirectoryPath, operationDirectory);
       var routePath = path.resolve(operationDirectoryPath, 'route');
       var route = require(routePath);
       routes.push(route);
    });
  }
});


module.exports = routes;
