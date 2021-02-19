const EventEmitter = require('events');
const { read } = require('fs');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const emitter = new Sales();

emitter.on('newSale', () => {
  console.log('There was a new sale!');
});

emitter.on('newSale', () => {
  console.log('Costumer name: Fulano');
})

emitter.emit('newSale');

///////////////////////////////////////////////////////////////////
const server = http.createServer();
let numberOfRequests = 0;

server.on('request', (req, res) => {
  numberOfRequests++;
  console.log(numberOfRequests, ' requests received');
  res.end('Request received');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is up and waiting for requests...');
});

