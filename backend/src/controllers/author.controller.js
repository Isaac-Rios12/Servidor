// import prisma from "../prisma/client.js"

import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await prisma.author.findMany();
        res.json(authors);
    }catch (error) {
        res.status(500).json({error: "Error al obtener los autores"});
    }
};

export const getAuthorById = async (req, res) => {
    try {
        const author = await prisma.author.findUnique({
            where: { id: parseInt(req.params.id)}
        });
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: "Error al obtner autor"});
    }
};

export const createAuthor = async (req, res) => {
    try {
        const { name } = req.body;
        const author = await prisma.author.create({
            data: {name}
        });
        res.status(201).json({message: `Autor creado correctamente con ID ${author.id}`});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export const updateAuthor = async (req, res) => {
    try {
        const { name } = req.body;
        const author = await prisma.author.update({
            where: { id: parseInt(req.params.id)},
            data: { name }
        });
        res.json(author)
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el autor"});
    }
};

export const deleteAuthor = async (req, res) => {
    try {
        await prisma.author.delete({
            where: {id: parseInt(req.params.id)}
        });
        res.json({ message: "Autor eliminado"});
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el usuario"})
    }
}

