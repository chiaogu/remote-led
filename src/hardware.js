// var J5 = require("johnny-five");
// var board = new J5.Board();

// board.on("ready", function () {
//   var leds = new J5.Leds([13, 12]);
  
//   leds.pulse();
// });

const io = require('socket.io-client');
const socket = io('http://localhost:8080');

socket.on('msg', data => {
  console.log(data);
});
socket.on('connect', () => {
  console.log(socket.id);
});