var Hapi = require('hapi');

var server = new Hapi.Server();

var serverConfig = {
    port: 8001
};

server.connection(serverConfig);

function startServer(){
    console.log('Hapi.js server running at : ', server.info.uri);
}

server.start(startServer);