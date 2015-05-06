var http = require('http'),
    map = require('through2-map'),
    portNumber = Number(process.argv[2])

http.createServer(function (request, response) {
  if (request.method !== 'POST')
    return response.end('send me a POST\n');

  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response);
}).listen(portNumber)


