var _ = require('lodash');

var utilities = require('./lib/utilities');

var resourceDirs = utilities.getDirectories('./resources');

var routes = _.map(resourceDirs, function(resourceDir){
    var routePath = './resources/' + resourceDir + '/resource.js';
    var route = require(routePath);
    return route;
});

module.exports = routes;

