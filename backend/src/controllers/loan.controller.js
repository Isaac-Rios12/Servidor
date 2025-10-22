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
    try{
        const { userId, physicalBookId} = req.body;
        const newLoan = await prisma.loan.create({
            data:{
                userId: parseInt(userId),
                physicalBookId: parseInt(physicalBookId),
                loanDate: new Date()
                //falta fecha de devolu
            }
        });
        res.json(newLoan);

    } catch (error) {
        res.status(500).json({ error: "Error creando el prestamo"});
    }
};

// export const updateLoan = async (req, res) => {
//     try {
//         const { returnDate } = req.body;
//         const loan = await prisma.loan.update({
//             where: { id: parseInt(req.params.id) },
//             data: { returnDate: returnDate ? new Date(returnDate) : null }
//         });
//         res.json(loan);
//     } catch (error) {
//         res.status(500).json({ error: "Error updating loan" });
//     }
// };

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
