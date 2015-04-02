var http = require('http')

var callback = function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
};

http.get(process.argv[2], callback)
