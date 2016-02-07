'use strict';

var hapi = require('hapi');
var connectionOptions = {port : 9001};

var server = new hapi.Server();
server.connection(connectionOptions);


// Code organization Level 1.
// Seperate the concepts of resources
// Create a resources folder
// Create a folder based on the name of the resource. For example, actors
// Create a resources.js file
// Export an array of route objects
// Each route object has a handler
// Extract the methods and name them after the operation
// Require the file in server.js and pass it to server.route method

var actors = require('./resources/actors/resources');
server.route(actors);

// Code organization Level 2.
// Seperate the various routes and their handlers into files
// Name the files after the operations
// Require the files in an endpoints file and add them to an arrays
// Reference the endpoints file in the server.js and pass the array to server.route

var albumRoutes = require('./resources/albums/endpoints.js');
server.route(albumRoutes);

// Code organization Level 3.
// Seperate the various routes from their handlers
// Keep all the routes in one file, called routes
// The routes file lists all the routes for the resource
// Create folders after operation names
// Each folder has a handler file
// The handler file is referenced from the routes.js file
// In the server.js, reference the routes file
// The routes.js exports an array of routes.
// Pass it to server.route

var bookRoutes = require('./resources/books/routes.js');
server.route(bookRoutes);

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
