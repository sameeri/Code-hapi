'use strict';
var hapi = require('hapi');

const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

var connectionOptions = {port : 9001};

var server = new hapi.Server();
server.connection(connectionOptions);

var routes = require('./routing/routes');
console.log('Routes', routes);
server.route(routes);

var options = {
    info: {
            'title': 'API Docs',
            'version': '1.0',
        }
    };


function onStart(err){
  if(err){
      console.log(err);
  }
  console.log("Server has started! ", server.info.uri, connectionOptions);
}

function uponRegistration(err){
  if (err) {
       console.log(err);
   }
      server.start(onStart);
}

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], uponRegistration);
