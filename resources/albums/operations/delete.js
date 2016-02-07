function handler (request, reply){
        reply("Delete album by id");
}

var remove = {
    path : '/albums/{id}',
    handler : handler,
    method: 'DELETE'

};


module.exports = remove;
