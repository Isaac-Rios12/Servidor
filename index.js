

const http = require("http")

const server = http.createServer((req, res) => {
    res.write("Soy Joan")
    res.end();
})

server.listen((3000), () => {
    console.log("Server is Running");
})
