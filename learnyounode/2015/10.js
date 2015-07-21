var net = require('net')
var moment = require('moment');

//console.log(process.argv)
//console.log("http://localhost:"+process.argv[2])

var server = net.createServer(function (socket) {
    var now = moment().format("YYYY-MM-DD HH:mm")
    socket.write(now)
    socket.write('\n')
    socket.end()
    //socket.pipe(socket)
})

server.listen(process.argv[2])
