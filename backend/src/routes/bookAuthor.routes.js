import express from 'express';
import { createBookAuthor, deleteRelation, getAllRelations } from '../controllers/bookAuthor.controller.js';

const router = express.Router();

router.get('/', getAllRelations)
router.post('/', createBookAuthor)
router.delete('/', deleteRelation)
export default router;
