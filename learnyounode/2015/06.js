var module = require('./06-module.js');
var dir = process.argv[2],
    ext = process.argv[3];

module(dir, ext, function (err, results) {
    if (err)
        console.log('there was error' + err);

    results.forEach(function (each) {
        console.log(each)
    })
});

