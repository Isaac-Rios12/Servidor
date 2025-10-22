// import prisma from  "../prisma/client.js";

import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getAllBooks = async (req, res) => {
    try{
        const books = await prisma.book.findMany();

        if (!books){
            return res.status(404).json({message: "Libros no encontrados"})
        }
        res.json(books);
    } catch (err) {
        res.status(500).json({error: "Error al obtener los libros"});
    }
};

// aca puede cambiar por sku, mejor analizar para determinar manera de filtrar
export const getBookById = async (req, res) => {
    try {
        const book = await prisma.book.findUnique({
            where: { id: parseInt(req.params.id)}
        });
        if (!book){
            return res.status(404).json({message: "Libro no encontrado"});
        }
        res.json(book)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el libro"});
    }
};

export const createBook = async (req, res) => {
    const {isbn, title, publicationDate} = req.body;

    if (!isbn || !title) {
        return res.status(400).json({
            error: "ISBN and title required"
        })
    }
    try{
        const newBook = await prisma.book.create({
            data: {isbn, title, publicationDate: publicationDate ? new Date(publicationDate): null },
        });
        res.status(201).json({message: "Libro creado con exito", book: newBook});
    } catch (error) {
        console.error("Prisma error:", error);

        if (error.code === "P2002") {
        return res.status(409).json({
            error: "Un libro con este ISBN ya existe",
        });
        }

        res.status(500).json({
        error: "Error creando el lbro"
        });
    }
};

export const deleteBook = async (req, res) => {
    try {
        await prisma.book.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.json({ message: "Libro eliminado"})
    } catch (error) {

        if (error.code === "P2025"){
            return res.status(404).json({message: "Libro con este ID no existe"})
        }
        console.error(error)
        res.status(500).json({ error: "Error al eliminar el libro"})
    }
}