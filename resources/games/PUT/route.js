'use strict';


var config = {
  'description': 'Update game',
  'notes': 'Update a game by id',
  'tags': ['api']
};

var route = {
'method': 'PUT',
'path': '/games/{id}',
'handler': require('./handler'),
'config': config
}

module.exports = route;
