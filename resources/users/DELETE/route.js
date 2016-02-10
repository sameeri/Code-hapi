'use strict';

var route = {
'method': 'DELETE',
'path': '/users/{id}',
'handler': require('./handler'),
'config': {
  'description': 'Delete user',
  'notes': 'Delete a user by id',
  'tags': ['api']
}
}

module.exports = route;
