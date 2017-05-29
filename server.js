const EventEmitter = require('events');
class Server extends EventEmitter {
    constructor(client) {
        super();

    }
}

module.export = (client) => new Server(client);