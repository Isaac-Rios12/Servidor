/*
  Warnings:

  - You are about to drop the `Autor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Libro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LibroAutor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LibroFisico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Prestamo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."LibroAutor" DROP CONSTRAINT "LibroAutor_autorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LibroAutor" DROP CONSTRAINT "LibroAutor_libroId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LibroFisico" DROP CONSTRAINT "LibroFisico_libroId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Prestamo" DROP CONSTRAINT "Prestamo_libroFisicoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Prestamo" DROP CONSTRAINT "Prestamo_usuarioId_fkey";

-- DropTable
DROP TABLE "public"."Autor";

-- DropTable
DROP TABLE "public"."Libro";

-- DropTable
DROP TABLE "public"."LibroAutor";

-- DropTable
DROP TABLE "public"."LibroFisico";

-- DropTable
DROP TABLE "public"."Prestamo";

-- DropTable
DROP TABLE "public"."Usuario";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "isbn" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "publicationDate" TIMESTAMP(3),

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhysicalBook" (
    "id" SERIAL NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "PhysicalBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookAuthor" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "BookAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "physicalBookId" INTEGER NOT NULL,
    "loanDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" TIMESTAMP(3),

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "BookAuthor_bookId_authorId_key" ON "BookAuthor"("bookId", "authorId");

-- AddForeignKey
ALTER TABLE "PhysicalBook" ADD CONSTRAINT "PhysicalBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookAuthor" ADD CONSTRAINT "BookAuthor_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookAuthor" ADD CONSTRAINT "BookAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_physicalBookId_fkey" FOREIGN KEY ("physicalBookId") REFERENCES "PhysicalBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
