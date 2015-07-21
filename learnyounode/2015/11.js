var http = require('http')
var fs = require('fs')

console.log(process.argv)

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'contenty-type': 'text/plain'})
    fs.createReadStream(process.argv[3]).pipe(response)
})

server.listen(process.argv[2]);
