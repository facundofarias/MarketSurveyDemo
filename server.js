
var hapi = require('hapi');
var routes = require('./routes');

var URL = '0.0.0.0';
var PORT = 8080;

var config = { };
var server = new hapi.Server(URL, PORT, config);

server.addRoutes(routes);

server.start();
console.log('Server started at: ' + URL + ':' +PORT);

server.on('request', function (request, event, tags) {

    console.log('Received request: ' + request.path);

    if (tags.error) {
        console.log(event);
    }
});