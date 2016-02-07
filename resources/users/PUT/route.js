'use strict';

var route = {
'method': 'PUT',
'path': '/users/{id}',
'handler': require('./handler')
}

module.exports = route;
