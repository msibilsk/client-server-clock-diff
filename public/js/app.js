document.body.onload = function() {
  var clientTime1;

  //open web socket and send current time
  function socketExample() {
    var socket = new WebSocket('ws://34.208.224.102:3000/');
    socket.onopen = function() {
      clientTime1 = new Date().valueOf();
      socket.send(clientTime1);
    };

    //when message is received from server figure out the estimate lag and clock difference
    socket.onmessage = function(message) {
      var clientTime2 = new Date().valueOf();
      var serverTime = message.data;
      var lag = (clientTime2 - clientTime1)/2;
      var clockDiff = (clientTime2 - serverTime) - lag;
      document.getElementById('response').innerHTML = "Initial Client Time: " + clientTime1 + "\nSecond Client Time: " + clientTime2 + "\nEstimated Lag: " + lag + "\nClock Dff: " + realClockDiff;
    };
  }

  socketExample();
}

