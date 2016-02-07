'use strict';

var route = {
'method': 'DELETE',
'path': '/actors/{id}',
'handler': require('./handler')
}

module.exports = route;
