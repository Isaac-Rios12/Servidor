// Filename - index.js

// Importing express module
const express = require("express")
const app = express()
// app.use("/", (req, res, next) => {
//     res.send("This is express")
// })

// Handling GET / request
app.get("/", (req, res, next) => {
    res.send("This is express")
})

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})

app.get("/user/:name", (req, res) => {
  res.send("Hola " + req.params.name);
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running")
})