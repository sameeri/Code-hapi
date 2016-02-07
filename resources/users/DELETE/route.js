'use strict';

var route = {
'method': 'DELETE',
'path': '/users/{id}',
'handler': require('./handler')
}

module.exports = route;
