'use strict';

var route = {
'method': 'GET',
'path': '/games/{id}',
'handler': require('./handler')
}

module.exports = route;
