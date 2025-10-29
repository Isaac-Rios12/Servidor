// import prisma from  "../prisma/client.js";

import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getAllLoans = async (req, res) => {
    try{
        const loans = await prisma.loan.findMany();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ error: "Error obteniendos los prestamos"});
    }
};

export const getLoanById = async (req, res) => {
    try{
        const loan = await prisma.loan.findUnique({
            where: {id: parseInt(req.params.id)}
        });
        res.json(loan)
    } catch (error) {
        res.status(500).json({ error: "Error obteniendo prestamo"});
    }
};

export const createLoan = async (req, res) => {
    try {
        const { userId, physicalBookId } = req.body;

        const bookId = parseInt(physicalBookId);

        // si esta disponi
        const physicalBook = await prisma.physicalBook.findUnique({
            where: { id: bookId }
        });

        if (!physicalBook) {
            return res.status(404).json({ error: 'El libro físico no existe' });
        }

        if (!physicalBook.available) {
            return res.status(400).json({ error: 'El libro ya está prestado' });
        }

        const newLoan = await prisma.loan.create({
            data: {
                userId: parseInt(userId),
                physicalBookId: bookId,
                loanDate: new Date()
            }
        });

        await prisma.physicalBook.update({
            where: { id: bookId },
            data: { available: false }
        });

        res.status(201).json(newLoan);

    } catch (error) {
        res.status(500).json({ error: 'Error creando el préstamo' });
    }
};

export const returnLoan = async (req, res) => {
  try {

    const loanId = parseInt(req.params.id);
    const loan = await prisma.loan.findUnique({
      where: { id: loanId },
      include: { physicalBook: true }
    });

    if (!loan) {
      return res.status(404).json({ error: 'Préstamo no encontrado' });
    }

    if (loan.returnDate) {
      return res.status(400).json({ error: 'El préstamo ya fue devuelto' });
    }
    
    const updatedLoan = await prisma.loan.update({
      where: { id: loanId },
      data: {
        returnDate: new Date()
      }
    });


    await prisma.physicalBook.update({
      where: { id: loan.physicalBookId },
      data: { available: true }
    });

    res.json({ message: 'Libro devuelto correctamente', loan: updatedLoan });

  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la devolución' });
  }
};

export const updateLoan = async (req, res) => {
    try {
        const { returnDate } = req.body;
        const loan = await prisma.loan.update({
            where: { id: parseInt(req.params.id) },
            data: { returnDate: returnDate ? new Date(returnDate) : null }
        });
        res.json(loan);
    } catch (error) {
        res.status(500).json({ error: "Error updating loan" });
    }
};

export const deleteLoan = async (req, res) => {
    try{
        await prisma.loan.delete({
            where: { id: parseInt(req.params.id)}
        });
        res.json({ message: "Prestamo eliminado"});
    }catch (error) {
        res.status(500).json({ error: "Error eliminando el prestamo"});
    }
};
