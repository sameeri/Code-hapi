'use strict';
var model = require('../../../models/User');
var _ = require('lodash');


function handler(request, reply) {

  function onSuccessfulRead(data) {
    if(data === null){
      reply('No data found to update');
    }

    data = _.extend(data, newUser);
    data.save().then(onSuccessfulWrite);
  }

  function onSuccessfulWrite(data){
    reply().code(204);
  }

  function onError(err) {
    console.log('err', err);
    reply("Failed updating user");
  }

  var userId = request.params.id;
  var query = {
    '_id': userId
  };
  var newUser = request.payload;

  model.findOne(query).then(onSuccessfulRead, onError);
}

module.exports = handler;
