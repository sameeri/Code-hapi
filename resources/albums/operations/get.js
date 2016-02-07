function handler (request, reply){
        reply("Retrieve an album by id");
}


var get = {
    path : '/albums/{id}',
    handler : handler,
    method: 'GET'

};


module.exports = get;
