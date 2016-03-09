'use strict';
var model = require('../../../models/User');

function handler (request, reply){
  function onSuccessfulRead(data){
      console.log('Fetched all users', data);
      reply(data);
  }
  function onError(err){
    console.log('err', err);
    reply("Failed fetching users");
  }

  model.find().then(onSuccessfulRead, onError);
}

module.exports = handler;
