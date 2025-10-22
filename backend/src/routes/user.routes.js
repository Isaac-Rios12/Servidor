import express from 'express';
import { getUsers, getUsuarioById, createUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUsuarioById);
router.post('/', createUser);
// router.put('/:id', updateUser); // Descomenta y define updateUser cuando lo tengas
router.delete('/:id', deleteUser);

export default router;