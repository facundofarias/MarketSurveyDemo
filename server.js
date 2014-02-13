
var hapi = require('hapi');
var routes = require('./routes');

var config = { };
var server = new hapi.Server('0.0.0.0', 8080, config);
server.pack.require({ lout: { endpoint: '/docs' } }, function (err) {

    if (err) {
        console.log('Failed loading plugins');
    }
});

server.addRoutes(routes);

server.start();

console.log("Server started at: http://localhost:8080/ ");

server.on('request', function (request, event, tags) {

    console.log(request.path);

    if (tags.error) {
        console.log(event);
    }
});