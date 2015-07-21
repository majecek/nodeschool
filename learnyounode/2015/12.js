var http = require('http')
var url = require('url')


//console.log(process.argv)

var server = http.createServer(function (req, res) {
    if (req.method != 'GET') {
        return res.end("Sorry, you have to use GET")
    }


    var q = url.parse(req.url, true)
    console.log(q)

    res.writeHead(200, {'contenty-type': 'text/json'})

    var now = new Date(q.query.iso)
    console.log(now)
    var jsonDate = JSON.stringify({hour: now.getHours(), minute: now.getMinutes(), second: now.getSeconds()}) //,,)
    var jsonUnixDate = JSON.stringify({unixtime: now.getTime()})

    console.log(jsonDate)
    console.log(jsonUnixDate)

    if (q.pathname === "/api/parsetime") {
        return res.end(jsonDate)
    } else {
        return res.end (jsonUnixDate)
    }
})

server.listen(process.argv[2]);
