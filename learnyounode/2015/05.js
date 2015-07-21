var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var ext = process.argv[3];

console.log(ext);

fs.readdir(file, function (err, files) {
    if (err) throw err;
//console.log(files)
    files.forEach(function (file) {
        if (path.extname(file) === '.' + ext) {
            console.log(file)
        }
    })
});

