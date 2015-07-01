var hapi = require('hapi');


var connectionOptions = {port : 9001};
var server = new hapi.Server();
server.connection(connectionOptions);


var routes = require('./routes.js');
server.route(routes);

function onStart(){
  console.log("Server has started! ", connectionOptions);
}

server.start(onStart);
