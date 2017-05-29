const EventEmitter = require('events');
const readline = require('readline');
const server = require('./server');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter ();

server(client)

rl.on('line', (input) => {
    console.log(input)
})