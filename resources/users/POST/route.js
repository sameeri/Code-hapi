'use strict';

var route = {
'method': 'POST',
'path': '/users',
'handler': require('./handler'),
'config': {
  'description': 'Create user',
  'notes': 'Create a new user',
  'tags': ['api']
}
}

module.exports = route;
