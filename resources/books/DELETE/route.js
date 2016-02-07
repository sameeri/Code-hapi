'use strict';

var route = {
'method': 'DELETE',
'path': '/books/{id}',
'handler': require('./handler')
}

module.exports = route;
