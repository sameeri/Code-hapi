function getHandler (request, reply){
        reply("Retrieve a actor by name");
}

function listHandler (request, reply){
        reply("List all actors");
}

function postHandler (request, reply){
        reply("Create a new actor");
}


function putHandler (request, reply){
        reply("Update an existing actor information");
}

function deleteHandler (request, reply){
        reply("Delete actor by name");
}


var get = {
    path : '/actors/{name}',
    handler : getHandler,
    method: 'GET'

};

var list = {
    path : '/actors',
    handler : listHandler,
    method: 'GET'

};

var post = {
    path : '/actors',
    handler : postHandler,
    method: 'POST'

};


var put = {
    path : '/actors/{name}',
    handler : putHandler,
    method: 'PUT'

};

var remove = {
    path : '/actors/{name}',
    handler : deleteHandler,
    method: 'DELETE'

};

var routes = [get, list, put, post, remove];

module.exports = routes;
