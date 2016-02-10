'use strict';

var config = {
  'description': 'Delete game',
  'notes': 'Delete a game by id',
  'tags': ['api']
};

var route = {
'method': 'DELETE',
'path': '/games/{id}',
'handler': require('./handler'),
'config': config
}

module.exports = route;
