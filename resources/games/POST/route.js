'use strict';


var config = {
  'description': 'Create game',
  'notes': 'Create a game',
  'tags': ['api']
};

var route = {
'method': 'POST',
'path': '/games',
'handler': require('./handler'),
'config': config
}

module.exports = route;
