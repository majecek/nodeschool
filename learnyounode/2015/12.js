var http = require('http')
var fs = require('fs')
var map = require('through2-map')


console.log(process.argv)

var server = http.createServer(function (request, response) {
    //response.writeHead(200, {'contenty-type': 'text/plain'})
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server.listen(process.argv[2]);
