
var hapi = require('hapi');
var routes = require('./routes');

var URL = '0.0.0.0';
var PORT = 8080;

var config = { };
var server = new hapi.Server(process.env.app_port | PORT, config);

server.addRoutes(routes);

server.start();
console.log("Server started at " + server.info.uri);

server.on('response', function (response, event, tags) {
    console.log('Sending response of: ' + response.path);
    if(response._response._payload[0])
        console.log('Sending response (data): ' + response._response._payload[0].toString());
});
