// Filename - index.js

// Importing express module
const express = require("express")
const app = express()
// app.use("/", (req, res, next) => {
//     res.send("This is express")
// })

const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

//leer JSON en POST
app.use(express.json());


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


app.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.json(usuarios)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error al traer usuarios"});
    }
});

app.post("/usuarios", async (req, res) =>{
    try{
        const {nombre, direccion} = req.body;
        const nuevoUsuario = await prisma.usuario.create({
            data: {
                nombre,
                direccion
            },
        });
        res.json(nuevoUsuario)
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Error al crear usuario"});

    }
});
app.post("/libros", async (req, res) =>{
    try{
        const {nombre, direccion} = req.body;
        const nuevoUsuario = await prisma.usuario.create({
            data: {
                nombre,
                direccion
            },
        });
        res.json(nuevoUsuario)
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Error al crear usuario"});

    }
});
// Server setup
app.listen(3000, () => {
    console.log("Server is Running")
})