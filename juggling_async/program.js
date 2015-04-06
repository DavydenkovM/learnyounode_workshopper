var http       = require('http'),
    BufferList = require('bl')

var bl = new BufferList();

function OutputPool () {

  this.buffer = [];
  this.counter = 0;

  this.addData = function (data, priority) {
    this.buffer.push({data: data, priority: priority})

    this.counter++;
    if (this.counter == 3)
      this.printResults();

  }.bind(this);

  this.printResults = function () {
    sortedBuffer = this.buffer.sort(function (a,b) {
      if (a.priority > b.priority)
        return 1
      if (a.priority < b.priority)
        return -1
      if (a.priority === b.priority)
        return 0     
    })

    sortedBuffer.forEach(function (entry) {
      console.log(entry.data);
    });
  };

};

var outputPool = new OutputPool();

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(BufferList(function (error, data) {
      if (error)
        return console.error(error);

      outputPool.addData(data.toString(), index);
      })
    );
  });
}

for (var i=0; i < 3; i++)
  httpGet(i)
