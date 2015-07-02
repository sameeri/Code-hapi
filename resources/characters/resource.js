function getHandler (request, reply){
        reply("Retrieve a character by name");
}

function listHandler (request, reply){
        reply("List all characters");
}

function postHandler (request, reply){
        reply("Create a new character");
}


function putHandler (request, reply){
        reply("Update an existing character information");
}

function deleteHandler (request, reply){
        reply("Delete character by name");
}


var get = {
    path : '/characters/{name}',
    handler : getHandler,
    method: 'GET'

};

var list = {
    path : '/characters',
    handler : listHandler,
    method: 'GET'

};

var post = {
    path : '/characters/{name}',
    handler : postHandler,
    method: 'POST'

};


var put = {
    path : '/characters/{name}',
    handler : putHandler,
    method: 'PUT'

};

var remove = {
    path : '/characters/{name}',
    handler : deleteHandler,
    method: 'DELETE'

};

var routes = [get, list, put, post, remove];

module.exports = routes;