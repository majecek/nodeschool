var fs = require('fs')

var text = fs.readFileSync(process.argv[2])
//console.log(fs.readFileSync(process.argv[2]).toString())

console.log(text.toString().split('\n').length - 1)
