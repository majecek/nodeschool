var http = require('http')
var url = require('url')

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
    if (req.method != 'GET') {
        return res.end("Sorry, you have to use GET")
    }

    var q = url.parse(req.url, true)
    var now = new Date(q.query.iso)
    var result

    if(/^\/api\/parsetime/.test(q.pathname)) {
        result = parseTime(now)
    } else if(/^\/api\/unixtime/.test(q.pathname)) {
        result = unixtime(now)
    }

    if (result) {
        res.writeHead(200, {'contenty-type': 'text/json'})
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(Number(process.argv[2]))
