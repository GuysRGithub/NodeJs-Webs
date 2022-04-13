var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get('/person/:name', function(req, res){
    res.render('profile', {name: req.params.name})
})

app.get('/contact', function(req, res){
    res.render('profile', {qr: req.query, name: "Rosie"})
})
console.log("Listening on port 3000")
app.listen(3000)