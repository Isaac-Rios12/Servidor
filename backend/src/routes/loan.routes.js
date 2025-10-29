import express from 'express';
import { getAllLoans, getLoanById, createLoan, deleteLoan, returnLoan } from '../controllers/loan.controller.js';
// Si luego agregas updateLoan, solo importa también

const router = express.Router();

router.get('/', getAllLoans);
router.get('/:id', getLoanById);
router.post('/', createLoan);
// router.put('/:id', updateLoan); // Descomentar
router.delete('/:id', deleteLoan);
router.post('/:id/return', returnLoan);

export default router;