'use strict';

var inert = require('inert');
var vision = require('vision');
var HapiSwagger = require('hapi-swagger');

var hapiSwaggerOptions = {
    info: {
            'title': 'API Docs',
            'version': '1.0',
        }
    };

var hapiSwaggerPlugin =  {
    'register': HapiSwagger,
    'options': hapiSwaggerOptions
};

var plugins =  [
        inert,
        vision,
        hapiSwaggerPlugin
      ];

module.exports = plugins;
