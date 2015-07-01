function handler (request, reply){
        var message = request.params.user ? "Yo! " + request.params.user : "Hi there! Sorry, what was your name again?"
        reply(message);
}

var greeting = {
    path : '/greeting/{user?}',
    handler : handler,
    method: 'GET'

};

module.exports = greeting;