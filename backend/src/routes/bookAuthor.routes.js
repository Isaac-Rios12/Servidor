import express from 'express';
import { createBookAuthor, deleteRelation } from '../controllers/bookAuthor.controller.js';

const router = express.Router();

router.post('/', createBookAuthor)
router.delete('/', deleteRelation)
export default router;
//