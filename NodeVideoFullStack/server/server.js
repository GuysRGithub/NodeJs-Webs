const http = require("http")

const app = require("./App")

const port = require("./configs/default").port

const server = http.createServer(app)

server.listen(port, () => {
    console.log('====================================');
    console.log(`Listen on port: ${port}`);
    console.log('====================================');
})
