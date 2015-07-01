function handler (request, reply){
        console.log('A request to base route has been made');
        reply("Cause i'm happy!");
}

var home = {
    path : '/',
    handler : handler,
    method: 'GET'

};

module.exports = home;


