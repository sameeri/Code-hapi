var get = {
    path : '/books/{id}',
    handler : require('./operations/GET/handler'),
    method: 'GET'

};

var list = {
    path : '/books',
    handler : require('./operations/LIST/handler'),
    method: 'GET'

};
                      
var put = {
    path : '/books/{id}',
    handler : require('./operations/PUT/handler'),
    method: 'PUT'

};

var post = {
    path : '/books',
    handler : require('./operations/POST/handler'),
    method: 'POST'

};                      
                      
var remove = {
    path : '/books/{id}',
    handler : require('./operations/DELETE/handler'),
    method: 'DELETE'

};


var routes = [get, list, put, post, remove];

module.exports = routes;