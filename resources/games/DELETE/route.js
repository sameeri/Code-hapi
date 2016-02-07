'use strict';

var route = {
'method': 'DELETE',
'path': '/games/{id}',
'handler': require('./handler')
}

module.exports = route;
