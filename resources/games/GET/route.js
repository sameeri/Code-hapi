'use strict';

  var config = {
    'description': 'Get game',
    'notes': 'Get a game by id',
    'tags': ['api']
  };


var route = {
'method': 'GET',
'path': '/games/{id}',
'handler': require('./handler'),
'config': config
}

module.exports = route;
