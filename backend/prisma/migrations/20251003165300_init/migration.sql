-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "fechaPublicacion" TIMESTAMP(3),
    "disponible" BOOLEAN NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibroAutor" (
    "libroId" INTEGER NOT NULL,
    "autorId" INTEGER NOT NULL,

    CONSTRAINT "LibroAutor_pkey" PRIMARY KEY ("libroId","autorId")
);

-- CreateTable
CREATE TABLE "Prestamo" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "libroId" INTEGER NOT NULL,
    "fechaPrestamo" TIMESTAMP(3) NOT NULL,
    "fechaDevolucion" TIMESTAMP(3),

    CONSTRAINT "Prestamo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prestamo_usuarioId_libroId_fechaPrestamo_key" ON "Prestamo"("usuarioId", "libroId", "fechaPrestamo");

-- AddForeignKey
ALTER TABLE "LibroAutor" ADD CONSTRAINT "LibroAutor_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibroAutor" ADD CONSTRAINT "LibroAutor_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prestamo" ADD CONSTRAINT "Prestamo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prestamo" ADD CONSTRAINT "Prestamo_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
