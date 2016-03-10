'use strict';
var model = require('../../../models/User');

function handler (request, reply){
  function onSuccess(data){
      console.log('Created a new user', data);
      reply(data).code(201);
  }
  function onError(err){
    console.log('err', err);
    reply("Failed creating a new user");
  }

  console.log('Request', request.payload);
  var user = request.payload;

  console.log(typeof user);
  model.create(user).then(onSuccess, onError);
}

module.exports = handler;
