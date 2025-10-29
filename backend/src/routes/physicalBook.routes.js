import express from 'express';
import {
  getPhysicalBooks,
  getPhysicalBookById,
  addCopiesToBook,
  deletePhysicalBook,
  updateAvailability
} from '../controllers/physicalBook.controller.js';

const router = express.Router();

router.get('/', getPhysicalBooks);
router.get('/:id', getPhysicalBookById);
router.post('/:bookId', addCopiesToBook);
router.delete('/:id', deletePhysicalBook);
router.patch('/:id/availability', updateAvailability);

export default router;