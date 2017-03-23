var WSServer = require('ws').Server;
var server = require('http').createServer();
var expressApp = require('./express-app');

var port = process.env.PORT || 3000;

//bind ws server to http server
var wss = new WSServer({
  server: server
});

//use express routes
server.on('request', expressApp);

//when wss receives message from client respond with server clock time
wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(message) {
    ws.send(new Date().valueOf());
  });
});

server.listen(port, function() {
  console.log(`http/ws server listening on ${port}`);
});