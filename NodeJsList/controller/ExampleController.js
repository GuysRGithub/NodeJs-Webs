var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({extended: false})
var data = [{item: "Rosie"}, {item: "Lisa"}, {item: "Jennie"}, {item: "Jisoo"}]

module.exports = function(app) {
    app.get("/todo", function(req, res) {
        res.render('todo', {todos: data})
    })

    app.post("/todo", urlencodeParser, function(req, res) {
        data.push(req.body)
        res.json(data)
    })

    app.delete("/todo", function(req, res) {

    })
}