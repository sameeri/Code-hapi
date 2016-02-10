'use strict';

var route = {
'method': 'GET',
'path': '/users',
'handler': require('./handler'),
'config': {
  'description': 'Fetch users',
  'notes': 'Get all users',
  'tags': ['api']
}
}

module.exports = route;
