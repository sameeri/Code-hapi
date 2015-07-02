var hapi = require('hapi');


var connectionOptions = {port : 9001};
var server = new hapi.Server();
server.connection(connectionOptions);


//var routes = require('./routes.js');

var albumRoutes = require('./resources/albums/endpoints.js');
var bookRoutes = require('./resources/books/routes.js');
var characterRoutes = require('./resources/characters/resource.js');

server.route(albumRoutes);
server.route(bookRoutes);
server.route(characterRoutes);

function onStart(){
  console.log("Server has started! ", connectionOptions);
}

server.start(onStart);
