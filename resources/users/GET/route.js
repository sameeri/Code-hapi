'use strict';

var route = {
'method': 'GET',
'path': '/users/{id}',
'handler': require('./handler')
}

module.exports = route;
