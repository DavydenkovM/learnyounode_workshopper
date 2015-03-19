var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var fileContent = file.toString();
console.log(fileContent.split('\n').length - 1);
