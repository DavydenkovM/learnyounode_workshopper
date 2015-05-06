var http = require('http'),
    fs = require('fs'),
    port = Number(process.argv[2]),
    stored_file = process.argv[3]

var callback = function (request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(stored_file).pipe(response);
}

http.createServer(callback).listen(port);

