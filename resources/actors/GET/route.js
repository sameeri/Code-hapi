'use strict';

var route = {
'method': 'GET',
'path': '/actors/{id}',
'handler': require('./handler')
}

module.exports = route;
