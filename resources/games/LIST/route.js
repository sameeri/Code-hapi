'use strict';


var config = {
  'description': 'Get all games',
  'notes': 'Get all games',
  'tags': ['api']
};

var route = {
'method': 'GET',
'path': '/games',
'handler': require('./handler'),
'config': config
}

module.exports = route;
