# Proyecto Biblioteca Luz y Saber

## 1. Esquema de base de datos

**Escenario:** Biblioteca Luz y Saber

**Entidades y atributos:**

![Diagrama de base de datos](image.png)
 ##Link de la imagen por si no carga: https://drawsql.app/teams/-4596/diagrams/luz-y-saber

- **Usuario**
  - id (clave primaria)
  - nombre (no puede estar vacío)
  - dirección (puede estar vacío)
  - telefono (puede estar vacío y es unico)
- **Libro**
  - isbn (clave primaria)
  - título (no puede estar vacío)
  - fecha_publicación
- **LibroFisico**
  - id (clave primaria)
  - disponible (no puede estar vacío)
  - libro_id
- **Autor**
  - id (clave primaria)
  - nombre (no puede estar vacío)
- **LibroAutor** (tabla para la relación muchos a muchos)
  - id (clave primaria)
  - libro_id (relaciona con Libro)
  - autor_id (relaciona con Autor)
- **Préstamo**
  - id (clave primaria)
  - usuario_id (relaciona con Usuario)
  - libro_id (relaciona con Libro)
  - fecha_prestamo
  - fecha_devolucion

**Relaciones:**

- Un usuario puede tener varios préstamos (1:N)
- Un libro puede estar en varios préstamos (1:N)
- Un libro puede tener varios autores y un autor puede tener varios libros (N:M a través de LibroAutor)

---

## 2. Justificación de la base de datos elegida

**Motor:** PostgreSQL

**Por qué lo elegí:**

- Funciona muy bien con Prisma y Node.js
- Permite hacer relaciones entre tablas fácilmente
- Es estable y se usa mucho, por eso creo que es buena opción
- Los tipos de datos como boolean y date son fáciles de usar

---

## 3. ORM elegido

**ORM:** Prisma

**Por qué Prisma:**

- Es fácil de usar con Node.js
- Permite definir los modelos de las tablas y genera consultas automáticas
- Tiene migraciones, así puedo crear las tablas sin escribir todo el SQL
- Me ayuda a hacer pruebas rápido con datos de ejemplo

---

## 4. Plan de acción para integrar la base de datos

**Pasos a seguir:**

1. Levantar la base de datos PostgreSQL usando Docker

      # Pasos para integrar PostgreSQL con Prisma en el proyecto

      Desde la carpeta `docker/`:

      ```bash
      docker-compose up -d

      Verifica que el contenedor está corriendo:

      docker ps
  
2. Instalar Prisma y generar el cliente con `npx prisma init`

      Desde la carpeta backend/:

      npm install prisma --save-dev
      npm install @prisma/client
      npx prisma init


      Esto crea la carpeta prisma/  dentro de backend/


3. Configurar la URL de la base de datos en el archivo `.env`
    En backend/.env:

    DATABASE_URL="postgresql://username:password@localhost:port/NAMEDB"


    Ajusta usuario, contraseña, puerto y base de datos según tu Docker.

4. Definir el esquema de las tablas en `prisma/schema.prisma`
    <!-- En backend/prisma/schema.prisma, define tus modelos:

    generator client {
      provider = "prisma-client-js"
      output   = "../generated/prisma"
    }

    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    model User {
      id       Int       @id @default(autoincrement())
      name     String
      address  String?
      loans    Loan[]
    }

    model Book {
      id              Int            @id @default(autoincrement())
      isbn            String         @unique
      title           String
      publicationDate DateTime?
      bookAuthors     BookAuthor[]
      physicalBooks   PhysicalBook[]
    }

    model PhysicalBook {
      id        Int     @id @default(autoincrement())
      available Boolean @default(true)
      bookId    Int
      book      Book    @relation(fields: [bookId], references: [id])
      loans     Loan[]
    }

    model Author {
      id          Int          @id @default(autoincrement())
      name        String
      bookAuthors BookAuthor[]
    }

    model BookAuthor {
      id       Int    @id @default(autoincrement())
      bookId   Int
      authorId Int
      book     Book   @relation(fields: [bookId], references: [id])
      author   Author @relation(fields: [authorId], references: [id])

      @@unique([bookId, authorId])
    }

    model Loan {
      id             Int          @id @default(autoincrement())
      userId         Int
      physicalBookId Int
      loanDate       DateTime     @default(now())
      returnDate     DateTime?
      physicalBook   PhysicalBook @relation(fields: [physicalBookId], references: [id])
      user           User         @relation(fields: [userId], references: [id])
    } -->

5. Ejecutar la migración con `npx prisma migrate dev --name init`
    Desde backend/:

    npx prisma migrate dev --name init


6. Probar la conexión y crear algunos datos de prueba (usuarios, libros, autores, préstamos)
    Desde backend/:

    npx prisma studio


    Esto abre Prisma Studio para ver y crear usuarios, libros, autores y préstamos.

7. Integrar Prisma con el servidor Express para usar la base de datos en la app

    En tu servidor Express (backend/):

    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();


    Ahora puedes usar prisma.Usuario.findMany(), prisma.Libro.create() y otras funciones para interactuar con la base de datos.

**Librerías necesarias:**

- `prisma`
- `@prisma/client`
- `pg`

**Pruebas iniciales:**

- Crear un usuario de prueba
- Crear algunos libros y autores
- Registrar un préstamo y verificar que todo se conecta bien



## Instrucciones para correr el proyecto

### 1. Clonar el repo
```bash

  git clone url_del_proyecto
  cd Proyecto-Servidor

```
### 2. Crear el archivo .env

  Ir a la carpeta backend/ y crear un archivo .env.
  Para esto existe una carpeta llamada `.env.example`, la puedes copiar y llamar `.env`
  Un ejemplo de cómo debería quedar:

  POSTGRES_USER=user
  POSTGRES_PASSWORD=password
  POSTGRES_DB=ProyectoBiblioteca
  DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5433/${POSTGRES_DB}"

### 3. Levantar la base de datos con Docker

  Desde la carpeta docker/ correr:

  docker-compose up -d
  Con docker ps se puede ver si el contenedor está corriendo.


### 4. Instalar dependencias del backend

  Desde backend/:

  cd ../backend
  npm install


### 5. Crear las tablas en la BD

  En backend/:

  npx prisma migrate dev --name init


### 6. (Opcional) Revisar la BD 

  Con Prisma Studio:

  npx prisma studio

### 7. Levantar el servidor


  En backend/:

  npm run dev


  Ahora si todo esta correcto puedes empezar a hacer llamadas a la api y sus funcionalidades.

