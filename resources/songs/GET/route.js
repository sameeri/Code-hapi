'use strict';

var route = {
'method': 'GET',
'path': '/songs/{id}',
'handler': require('./handler')
}

module.exports = route;