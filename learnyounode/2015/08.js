var http = require('http')
var url  = process.argv[2]
var bl   = require('bl')

http.get(url, function(res) {
  res.setEncoding('utf8')
  res.pipe(bl(function(err, data) {
    console.log(data.length)
    console.log(data.toString())
  }))
})

