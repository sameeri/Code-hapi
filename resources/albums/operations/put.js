function handler (request, reply){
        reply("Update an existing album");
}

var put = {
    path : '/albums/{id}',
    handler : handler,
    method: 'PUT'

};


module.exports = put;
