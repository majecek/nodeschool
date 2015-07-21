var http = require('http');
var bl = require('bl');
var resutls = []
var count = 0

//console.log(urls)

function printResults() {
    resutls.forEach( function (text) {
        console.log(text)
    })
}

function httpGet(index) {
    http.get(process.argv[2+index], function (res) {
        res.pipe(bl(function(e, data) {
            if (e)
                return console.error(e)
            resutls[index] = data.toString()
            count++

            if (count == 3) {
                printResults()
            }


        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}
