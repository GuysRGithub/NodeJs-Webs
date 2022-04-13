var express = require("express");
var cors = require("cors");
var app = express();
var monk = require("monk");

const db = monk("localhost/guys");

const articles = db.get("art");

app.use(cors());
app.use(express.json());

app.get("/", function(req, res) {
  // validate later
});

app.get("/guys", (req, res) => {
  articles.find()
  .then(articles => res.json(articles))
})

app.post("/guys", function(req, res) {
  const article = {
    name: req.body.name.toString(),
    content: req.body.content.toString(),
    created: new Date()
  };


  articles.insert(article)
  .then(result => {
    res.json(result);
    console.log(result);
  });
});

app.listen(3000);
console.log("Listening on port 3000");
