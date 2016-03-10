'use strict';
var model = require('../../../models/User');

function handler (request, reply){
  function onSuccess(data){
      if(data === null){
        reply('No data');
      }
      reply(data);
  }
  function onError(err){
    console.log('err', err);
    reply("Failed reading user");
  }

  console.log('Requested id', request.params.id);
  var userId = request.params.id;
  var query = {'_id': userId};

  model.findOne(query).then(onSuccess, onError);
}

module.exports = handler;
