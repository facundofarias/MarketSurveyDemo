var hapi = require('hapi');
var routes = require('./routes');

var PORT = 8080;

var options = {
    views: {
        engines: { jade: 'jade' },
        path: './views',
        compileOptions: {
            pretty: true
        }
    }
};

var server = new hapi.Server(process.env.app_port | PORT, options);

server.route(routes.routes);

server.start();
console.log("Server started at " + server.info.uri);

server.on('response', function (response, event, tags) {
    console.log('Sending response of: ' + response.path);
});
