'use strict';
var model = require('../../../models/User');
var Boom = require('boom');

function handler (request, reply){
  function onSuccess(data){
      if(data === null){
        reply(Boom.notFound('No user match found'));
      }
      reply(data);
  }
  function onError(err){
    console.log('err', err);
    reply("Failed reading user");
  }
  var userId = request.params.id;
  var query = {'_id': userId};

  model.findOne(query).then(onSuccess, onError);
}

module.exports = handler;
