const J5 = require("johnny-five");
const io = require('socket.io-client');

const board = new J5.Board({ repl: false });
const socket = io('http://localhost:8080');

board.on("ready", function () {
  const leds = [13, 12].reduce((map, pin) => {
    map[pin] = new J5.Led(pin);
    return map;
  }, {});

  socket.on('signal', event => {
    const led = leds[event.id];
    if(!led) return;

    if (event.type === 'on') {
      led.on();
    } else if (event.type === 'off') {
      led.off();
    }
  });
});
