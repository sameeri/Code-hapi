var hapi = require('hapi');


var connectionOptions = {port : 9001};
var server = new hapi.Server();
server.connection(connectionOptions);

var characterRoutes = require('./resources/characters/resource.js');
server.route(characterRoutes);

function onStart(){
  console.log("Server has started! ", connectionOptions);
}

server.start(onStart);
