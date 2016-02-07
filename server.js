'use strict';

var hapi = require('hapi');
var connectionOptions = {port : 9001};

var server = new hapi.Server();
server.connection(connectionOptions);

// Code organization Level 4.
// Resources are represented with folders
// Inside each resource, Operations are represented with folders
// Each operation folder has two files route.js, handler.js
// A routesCollector, on startup programmatically walks through the tree of Resources
// and exports an array of routes.

var routes = require('./routing/routes');
console.log('Routes', routes);
server.route(routes);

function onStart(){
  console.log("Server has started! ", connectionOptions);
}

server.start(onStart);
