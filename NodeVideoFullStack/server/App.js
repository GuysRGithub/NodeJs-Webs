const express = require("express")
const app = express();

const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1/nodeVideo', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
        
    } else {
        console.log('====================================');
        console.log("Connect Database!");
        console.log('====================================');
    }
})

const checkAuth = require("./middleware/check-auth")

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", (req, res) => {
    res.send("Hello")
})

app.use("/api/videos", express.static("media/uploads"))

app.use('/api/signup', require("./routes/SignUp"))
app.use("/api/signin", require("./routes/SignIn"))
app.use("/api/upload", checkAuth, require("./routes/Upload"))
app.use("/api/videos", checkAuth, require("./routes/VideoList"))


module.exports = app;