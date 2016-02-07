'use strict';

var route = {
'method': 'PUT',
'path': '/books/{id}',
'handler': require('./handler')
}

module.exports = route;
