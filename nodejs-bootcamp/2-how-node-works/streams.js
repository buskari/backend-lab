const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Solution 1 (NO STREAMING) -- First it load the file into the memory and than, send it (its a problem if its a big file)
  //fs.readFile('test-file.txt', (err, data) => {
  //  if (err) console.log(err);
  //  res.end(data);
  //});

  // Solution 2 (STREAMING) -- This solution has a back pressure problem. Thas is, the files reads much faster than can ben send. The pipe() method, resolves that problem
  // const readable = fs.createReadStream('test-file.txt');
  // readable.on('data', chunck => {
  //  res.write(chunck);
  // })
  // readable.on('end', () => {
  //   res.end();
  // })
  // readable.on('error', err => {
  //  console.log(err);
  //  res.statusCode = 500;
  //  res.end('File Not Found!');
  // })


  // Solution 3 (BEST METHOD)
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is up and waiting for requests...');
})