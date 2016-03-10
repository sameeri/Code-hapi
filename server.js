'use strict';
var hapi = require('hapi');
var mongoose = require('mongoose');
mongoose.Promise = Promise;

var server = new hapi.Server();

var connectionOptions = {
  port: 9001
};
server.connection(connectionOptions);

var routes = require('./routing/routes');
server.route(routes);

function onServerStart(err) {
  if (err) {
    console.log(err);
  }
  console.log("Server has started! ", server.info.uri, connectionOptions);
}

function uponPluginRegistration(err) {
  function onSuccessfulMongoConnectionOpen() {
    server.start(onServerStart);
  }

  if (err) {
    console.log(err);
  }

  //Connect to mongo server
  mongoose.connect('mongodb://localhost/playfield');
  var db = mongoose.connection;
  console.log('Are we here?');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', onSuccessfulMongoConnectionOpen);
}

var plugins = require('./plugins/plugins');
server.register(plugins, uponPluginRegistration);
