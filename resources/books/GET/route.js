'use strict';

var route = {
'method': 'GET',
'path': '/books/{id}',
'handler': require('./handler')
}

module.exports = route;
