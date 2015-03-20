var fs = require('fs');
var path = require('path');

function FileListFilter(extname){
  this.extname = extname;
}

FileListFilter.prototype.perform = function(err, list) {
  console.log(this);

  list.forEach(function(entry) {
    console.log(this.extname);
    console.log(path.extname(entry));
    if (path.extname(entry) == (this.extname)) {
      console.log(entry);
    }
  }, this);
};

extension = process.argv[3];
fileListFilter = new FileListFilter(extension);

fs.readdir(process.argv[2], fileListFilter.perform.bind(fileListFilter));

