var get = require('./operations/get');
var list = require('./operations/list');
var put = require('./operations/put');
var post = require('./operations/post');
var remove = require('./operations/delete');

var routes = [get, list, put, post, remove];

module.exports = routes;