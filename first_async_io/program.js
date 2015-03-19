var fs = require('fs');

function logStringCount(count) {
  console.log(count);
};

var file = fs.readFile(process.argv[2], function(err, data) {
  var fileContent = data.toString();
  logStringCount(fileContent.split('\n').length - 1);
});


