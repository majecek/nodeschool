var http = require('http')
//console.log(process.argv);


http.get(process.argv[2], function (res) {
    //console.log("Got response: " + res.statusCode);
    res.setEncoding('utf8')
    res.on('data', console.log )
    res.on('error', console.error)
});
