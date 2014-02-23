var hapi = require('hapi');
var routes = require('./routes');

var PORT = 9664;

var options = {
    views: {
        engines: { jade: 'jade' },
        path: './views',
        compileOptions: {
            pretty: true
        }
    }
};

var server = new hapi.Server(process.env.app_host, process.env.app_port | PORT, options);

server.start();
console.log("Server started at " + server.info.uri);

server.route(routes.routes);
server.on('response', function (response, event, tags) {
    console.log('Sending response of: ' + response.path);
});
