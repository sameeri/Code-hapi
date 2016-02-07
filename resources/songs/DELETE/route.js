'use strict';

var route = {
'method': 'DELETE',
'path': '/songs/{id}',
'handler': require('./handler')
}

module.exports = route;
