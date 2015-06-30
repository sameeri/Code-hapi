var hapi = require('hapi');

var server = new hapi.Server();

var connectionOptions = {port : 9001};

server.connection(connectionOptions);

function onStart(){
  console.log("Server has started! ", connectionOptions);
}

var homeRoute = {
    path : '/',
    handler : function homeHandler (request, reply){
        console.log('A request to base route has been made');
        reply("Cause i'm happy!");
    },
    method: 'GET'

};

var debugRoute = {
    path : '/debug',
    handler : function debugHandler (request, reply){
        console.log('A request to debug route was made at : ',  new Date());
        reply(connectionOptions);
    },
    method: 'GET'

};

var routes = [homeRoute, debugRoute];

server.route(routes);


server.start(onStart);
