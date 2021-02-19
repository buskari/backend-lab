const fs = require('fs');
const crypto = require('crypto');

setTimeout(() => console.log('A'), 0);
setImmediate(() => console.log('B'));

let start = Date.now();

fs.readFile('test-file.txt', () => {
  console.log('C');

  setTimeout(() => console.log('D'), 0);
  setTimeout(() => console.log('E'), 3000);
  setImmediate(() => console.log('F'));

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Password encrypted', (Date.now() - start) / 1000);
  });
});

console.log('H');
