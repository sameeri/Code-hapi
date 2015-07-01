//var home = require('./resources/home/resource.js');
//var debug = require('./resources/debug/resource.js');
//var greeting = require('./resources/greeting/resource.js');
//
//var routes = [home, debug, greeting];
//module.exports = routes;





var _ = require('lodash');

var utilities = require('./lib/utilities');

var resourceDirs = utilities.getDirectories('./resources');

var routes = _.map(resourceDirs, function(resourceDir){
    var routePath = './resources/' + resourceDir + '/resource.js';
    var route = require(routePath);
    return route;
});

module.exports = routes;

