function handler (request, reply){
        reply("Create a new album");
}

var post = {
    path : '/albums',
    handler : handler,
    method: 'POST'

};


module.exports = post;
