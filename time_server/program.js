var net = require('net'),
    strftime = require('strftime')

var server = net.createServer(function (socket) {
      date = new Date
      socket.end(strftime('%Y-%m-%d %H:%M', date))
    })

server.listen(process.argv[2])



