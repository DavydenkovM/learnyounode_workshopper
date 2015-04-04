var http       = require('http'),
    BufferList = require('bl')

var bl = new BufferList();

http.get(process.argv[2], function(response) {
  response.pipe(BufferList(function(error, data) {
      if (error)
        return console.error(error);
      console.log(data.length)
      console.log(data.toString())
    })
  );
});
