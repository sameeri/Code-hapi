'use strict';

var route = {
'method': 'PUT',
'path': '/friends/{id}',
'handler': require('./handler')
}

module.exports = route;
