var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
        if (err)
            return console.error(err);
        console.log(data.length);
        console.log(data.toString())
    }))
});

