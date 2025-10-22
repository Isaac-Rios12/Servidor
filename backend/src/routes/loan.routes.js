import express from 'express';
import { getAllLoans, getLoanById, createLoan, deleteLoan } from '../controllers/loan.controller.js';
// Si luego agregas updateLoan, solo importa también

const router = express.Router();

router.get('/', getAllLoans);
router.get('/:id', getLoanById);
router.post('/', createLoan);
// router.put('/:id', updateLoan); // Descomenta cuando implementes updateLoan
router.delete('/:id', deleteLoan);

export default router;