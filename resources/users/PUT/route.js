'use strict';

var route = {
'method': 'PUT',
'path': '/users/{id}',
'handler': require('./handler'),
'config': {
  'description': 'Update user',
  'notes': 'Modify a user by id',
  'tags': ['api']
}
}

module.exports = route;
