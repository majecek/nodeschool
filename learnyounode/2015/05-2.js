var fs = require('fs');
var path = require('path');

console.log(process.argv);

fs.readdir(process.argv[2], function (err, data) {
    if (err) throw err;
    console.log("");
    console.log(data);
    console.log("");
    data.forEach(function (file) {
        //console.log(path.extname(file))
        if (path.extname(file) == "." + process.argv[3]) {
            console.log(file)
        }
    })
});
