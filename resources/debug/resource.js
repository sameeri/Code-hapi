function handler (request, reply){
        console.log('A request to debug route was made at : ',  new Date());
        reply(request.server.info);
}

var debug = {
    path : '/debug',
    handler : handler,
    method: 'GET'

};


module.exports = debug;