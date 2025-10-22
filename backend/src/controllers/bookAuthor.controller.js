import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();


export const createBookAuthor = async (req, res) => {
    const { bookId, authorId } = req.body;
    try{
        const book = await prisma.book.findUnique({ where: {id: bookId}});
        const author = await prisma.book.findUnique({ where: {id: authorId}});

        if (!book || !author){
            return res.status(404).json({ error: "El libro o el autor no existen"});
        }

        const bookAuthor = await prisma.bookAuthor.create({
            data: {
                bookId,
                authorId,
            },
        })
        res.status(201).json({
            message: "Relacion libro-autor creada",
            bookAuthor,
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Errr al crear la relacion entre libro y autor"
        });
    }
};

export const deleteRelation = async (req, res) => {
    try {
        const { id } = req.body;
        const relation = await prisma.bookAuthor.delete({
            where: {id: parseInt(id)}
        });
        res.status(200).json({ message: `Relacion del libro con ID...${relation.bookId} y autor ID...${relation.authorId} Eliminada`})
    } catch (error) {
        if (error.code === "P2025"){
            return res.status(404).json({ message: "Relacion no encontrada"})
        };
        console.error(error)
        res.status(500).json({error: "Error del servidor al eliminar relacion"});
    }
};

export const updateRelation = async (req, res) => {

}

