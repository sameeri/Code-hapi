'use strict';
var hapi = require('hapi');

var server = new hapi.Server();

var connectionOptions = {port : 9001};
server.connection(connectionOptions);

var routes = require('./routing/routes');
console.log('Routes', routes);
server.route(routes);

function onServerStart(err){
  if(err){
      console.log(err);
  }
  console.log("Server has started! ", server.info.uri, connectionOptions);
}

function uponPluginRegistration(err){
  if (err) {
       console.log(err);
   }
      server.start(onServerStart);
}

var plugins = require('./plugins/plugins');
server.register(plugins, uponPluginRegistration);
