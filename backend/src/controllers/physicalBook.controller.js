import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();


export const getPhysicalBooks = async (req, res) => {
	try {
		const{ available } = req.query;

		let filter = {};
		if (available !== undefined){
			filter.available = available === 'true';
		}

		const copies = await prisma.physicalBook.findMany({
			where: filter,
			include: { book: true }
		});
		res.json(copies);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener los libros físicos' });
	}
};


export const getPhysicalBookById = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const copy = await prisma.physicalBook.findUnique({
		where: { id },
		include: { book: true }
		});
		if (!copy) return res.status(404).json({ error: 'Copia no encontrada' });
		res.json(copy);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener la copia física' });
	}
	};


export const addCopiesToBook = async (req, res) => {
	try {
		const bookId = parseInt(req.params.bookId);
		const { quantity } = req.body;

		if (!quantity || quantity <= 0) {
		return res.status(400).json({ error: 'La cantidad debe ser mayor que 0' });
		}

		// Verifica si el libro existe
		const bookExists = await prisma.book.findUnique({ where: { id: bookId } });
		if (!bookExists) {
		return res.status(404).json({ error: 'Libro no encontrado' });
		}

		// Crea las copias físicas
		const copiesData = Array(quantity).fill({ bookId, available: true });

		await prisma.physicalBook.createMany({ data: copiesData });

		res.status(201).json({ message: `Se agregaron ${quantity} copias al libro` });
	} catch (error) {
		res.status(500).json({ error: 'Error al agregar copias al libro' });
	}
};

// Eliminar una copia física (por daño o pérdida)
export const deletePhysicalBook = async (req, res) => {
	try {
	const id = parseInt(req.params.id);

	const copy = await prisma.physicalBook.findUnique({ where: { id } });
	if (!copy) return res.status(404).json({ error: 'Copia no encontrada' });

	await prisma.physicalBook.delete({ where: { id } });
	res.json({ message: 'Copia eliminada correctamente' });
  } catch (error) {
	res.status(500).json({ error: 'Error al eliminar la copia física' });
  }
};

// Actualizar estado de disponibilidad, pero se debe restringir
export const updateAvailability = async (req, res) => {
	const id = parseInt(req.params.id);
	const { available } = req.body;
  	try {

		if (typeof available !== 'boolean') {
		return res.status(400).json({ error: 'El campo available debe ser booleano' });
		}

		const copy = await prisma.physicalBook.update({
		where: { id },
		data: { available }
		});
		res.json(copy);
    } catch (error) {

		if (error.code === "P2025"){
			return res.status(404).json({ message: `Copia con ID ${id} no encontrada`})
		}
		console.error(error)
		res.status(500).json({ error: 'Error al actualizar disponibilidad' });
   }
};