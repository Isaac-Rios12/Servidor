# Proyecto Biblioteca Luz y Saber

## 1. Esquema de base de datos

**Escenario:** Biblioteca Luz y Saber

**Entidades y atributos:**

- **Usuario**
  - id (clave primaria)
  - nombre (no puede estar vacío)
  - dirección (puede estar vacío)
- **Libro**
  - id (clave primaria)
  - título (no puede estar vacío)
  - fecha_publicación
  - disponible (booleano)
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
2. Instalar Prisma y generar el cliente con `npx prisma init`
3. Configurar la URL de la base de datos en el archivo `.env`
4. Definir el esquema de las tablas en `prisma/schema.prisma`
5. Ejecutar la migración con `npx prisma migrate dev --name init`
6. Probar la conexión y crear algunos datos de prueba (usuarios, libros, autores, préstamos)
7. Integrar Prisma con el servidor Express para usar la base de datos en la app

**Librerías necesarias:**

- `prisma`
- `@prisma/client`
- `pg`

**Pruebas iniciales:**

- Crear un usuario de prueba
- Crear algunos libros y autores
- Registrar un préstamo y verificar que todo se conecta bien