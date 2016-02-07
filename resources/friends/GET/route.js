'use strict';

var route = {
'method': 'GET',
'path': '/friends/{id}',
'handler': require('./handler')
}

module.exports = route;
