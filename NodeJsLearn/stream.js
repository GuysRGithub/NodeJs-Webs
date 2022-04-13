var http = require("http")
var fs = require('fs')



var readStream = fs.createReadStream(__dirname + '/lorum.txt', 'utf-8')
readStream.on('data', function(chunk){
    console.log('new chunk received: ', chunk)
})