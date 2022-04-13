const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const middlewares = require("./middleware")

const app = express()
app.use(cors)

app.use(morgan('common'))
app.use(helmet)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Litening on port http://localhost:${port}`)
})

app.get("/", function(req, res) {
    res.json("Hello World")
})

app.use(middlewares.requestNotFound)

app.use(middlewares.handlError)