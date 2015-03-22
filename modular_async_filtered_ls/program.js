var fs = require('fs');
var path = require('path');

function FileListFilter(extname){
  this.extname = extname;
}

FileListFilter.prototype.perform = function(err, list) {
  list.forEach(function(entry) {
    if (path.extname(entry) == ('.' + this.extname)) {
      console.log(entry);
    }
  }, this);
};

fileListFilter = new FileListFilter(process.argv[3]);

fs.readdir(process.argv[2], fileListFilter.perform.bind(fileListFilter));

