'use strict';

var route = {
'method': 'PUT',
'path': '/games/{id}',
'handler': require('./handler')
}

module.exports = route;
