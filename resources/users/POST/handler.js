'use strict';
var model = require('../../../models/User');
console.log(model);

function handler (request, reply){
  function onSuccessfulWrite(data){
      console.log('Data', data);
      reply("Created a new user");
  }
  function onError(err){
    console.log('err', err);
    reply("Failed creating a new user");
  }

  console.log('Request', request.payload);
  var user = request.payload;

  console.log(typeof user);
  model.create(user).then(onSuccessfulWrite, onError);
}

module.exports = handler;
