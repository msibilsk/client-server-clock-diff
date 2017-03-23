var WSServer = require('ws').Server;
var server = require('http').createServer();
var expressApp = require('./express-app');

var port = process.env.PORT || 3000;

var wss = new WSServer({
  server: server
});

server.on('request', expressApp);

wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(message) {
  	var clientTime = message.data;
	var serverTime = (new Date()).valueOf();
    ws.send(serverTime);
    console.log("server time sent")
  });
});

server.listen(port, function() {
  console.log(`http/ws server listening on ${port}`);
});