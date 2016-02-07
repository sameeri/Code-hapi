'use strict';

var route = {
'method': 'PUT',
'path': '/songs/{id}',
'handler': require('./handler')
}

module.exports = route;
