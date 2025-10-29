import express from 'express';
import cors from 'cors';

import userRoutes from './src/routes/user.routes.js';
import bookRoutes from './src/routes/book.routes.js';
import authorRoutes from './src/routes/author.routes.js';
import loanRoutes from './src/routes/loan.routes.js';
import bookAuthorRoutes from './src/routes/bookAuthor.routes.js';
import physicalBook from './src/routes/physicalBook.routes.js'
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'API Biblioteca Luz y Saber - Servidor corriendo',
    version: '1.0.0'
  });
});

// Rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/book-authors', bookAuthorRoutes);
app.use('/api/physical-book', physicalBook)

// Manejo de ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores del servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error en el servidor' });
});

// Iniciar servido
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

export default app;