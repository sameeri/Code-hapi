'use strict';

var route = {
'method': 'GET',
'path': '/users/{id}',
'handler': require('./handler'),
'config': {
  'description': 'Get user',
  'notes': 'Get a user by id',
  'tags': ['api']
}
}

module.exports = route;
