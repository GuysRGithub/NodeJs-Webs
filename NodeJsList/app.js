var express = require("express")

var exampleController = require("./controller/ExampleController")

var app = express()

app.set("view engine", "ejs");

app.use(express.static("./public"))

exampleController(app);


app.listen(3000)

console.log("Listening on port 3000")

