const EventEmitter = require('events');
class Server extends EventEmitter {
  constructor(client) {
    super();
    client.on('command', (command) => {
      console.log(command)
    })
  }
}

module.exports = (client) => new Server(client);