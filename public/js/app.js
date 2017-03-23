document.body.onload = function() {
  var clientTime;

  function socketExample() {
    console.log('Creating socket');
    var socket = new WebSocket('ws://localhost:3000/');
    socket.onopen = function() {

      clientTime = (new Date()).valueOf();
      socket.send(clientTime);
      console.log('client time sent.')
    };
    socket.onmessage = function(message) {
      var currentTime = (new Date()).valueOf();
      var serverTime = message.data;
      var initialDiff = serverTime - clientTime;
      var lag = (initialDiff + (currentTime - serverTime))/2;
      var realClockDiff = lag - initialDiff;
      document.getElementById('response').innerHTML = "Initial Client Time: " + clientTime + " Server Time: " + serverTime + " Return Client Time " + currentTime + " Estimated Lag: " + lag + " Real Clock Dff: " + realClockDiff;
    };
  }

  socketExample();
}