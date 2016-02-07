'use strict';

var route = {
'method': 'DELETE',
'path': '/friends/{id}',
'handler': require('./handler')
}

module.exports = route;
