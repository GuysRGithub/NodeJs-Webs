var http = require("http");
var fs = require("fs");

var readStream = fs.createReadStream(__dirname + "/index.html", "utf-8")
var writeStream = fs.createWriteStream(__dirname + "/out.txt")

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  readStream.pipe(res)
})

server.listen(3000, "127.0.0.1");
console.log("Listening on 3000 127.0.0.1");
