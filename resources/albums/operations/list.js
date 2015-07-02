function handler (request, reply){
        reply("List all almbums");
}


var list = {
    path : '/albums',
    handler : handler,
    method: 'GET'

};


module.exports = list;