// import prisma from "../prisma/client.js";

// const { PrismaClient } = require('../../generated/prisma');

import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
    try{
        const users = await prisma.user.findMany();
        
        if (!users){
            return res.status(404).json({message: "No usuarios encontrados"});
        }
        res.json(users);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al obtener al obtener los usuarios "});
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(req.params.id) }
        });

        if (!user) {
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuario" });
    }
};

export const createUser = async (req, res) => {
  try {
    const { name, address } = req.body;

    if (!name) {
      return res.status(400).json({ error: "El campo 'name' es obligatorio" });
    }
    const newUser = await prisma.user.create({
      data: { name, address } // address es opcional
    });

    res.status(201).json({ message: "Usuario creado correctamente", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el usuario", details: error.message });
  }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
            where: {id: parseInt(id)}
        });
        res.json({ message: "Usuario eliminado correctamente"});
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al eliminar usuario"});

    }
};