import express from 'express';
import { getAllBooks, getBookById, createBook, deleteBook } from '../controllers/book.controller.js';
// Si luego agregas updateBook, solo importa también

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
// router.put('/:id', updateBook); // Descomenta cuando implementes updateBook
router.delete('/:id', deleteBook);

export default router;