import { Historial_prestamo, Libro, Miembro, sequelize } from "./modelo.js";
import { QueryTypes } from "sequelize";

// Sincronizar modelos con la base de datos
sequelize.sync({ force: true }).then(async () => {
  console.log("Tablas creadas");

  // Insertar registros

//SOCIOS

  await Miembro.bulkCreate([
    {
      rut: "1111111-1",
      nombre: "Juan",
      apellido: "Soto",
      direccion: "avenida 1, Santiago",
      telefono: "911111111",
    },
    {
      rut: "2222222-2",
      nombre: "Ana",
      apellido: "Pérez",
      direccion: "pasaje 2, Santiago",
      telefono: "922222222",
    },
    {
      rut: "3333333-3",
      nombre: "Sandra",
      apellido: "Aguilar",
      direccion: "avenida 2, Santiago",
      telefono: "933333333",
    },
    {
      rut: "4444444-4",
      nombre: "Esteban",
      apellido: "Jerez",
      direccion: "avenida 3, Santiago",
      telefono: "944444444",
    },
    {
      rut: "5555555-5",
      nombre: "Silvana",
      apellido: "Muñoz",
      direccion: "pasaje 3, Santiago",
      telefono: "955555555",
    },
    // ... Puedes agregar más registros aquí
  ]);
  // LIBROS
  await Libro.bulkCreate([
    {
      isbn: '111-1111111-111',
      titulo: 'CUENTOS DE TERROR',
      paginas: 344,
      codigoAutor: 3,
      nombreAutor: 'JOSE',
      apellidoAutor: 'SALGADO',
      fechaMuerteAutor: '2020-01-01',
      tipoAutor: 'PRINCIPAL',
      diasPrestamo: 7,
    },
    {
      isbn: '222-2222222-222',
      titulo: 'POESÍAS CONTEMPORANEAS',
      paginas: 167,
      codigoAutor: 1,
      nombreAutor: 'ANDRÉS',
      apellidoAutor: 'ULLOA',
      fechaMuerteAutor: null,
      tipoAutor: 'PRINCIPAL',
      diasPrestamo: 7,
    },
    {
      isbn: '333-3333333-333',
      titulo: 'HISTORIA DE ASIA',
      paginas: 511,
      codigoAutor: 2,
      nombreAutor: 'SERGIO',
      apellidoAutor: 'MARDONES',
      fechaMuerteAutor: '2012-01-01',
      tipoAutor: 'PRINCIPAL',
      diasPrestamo: 14,
    },
    {
      isbn: '444-4444444-444',
      titulo: 'MANUAL DE MECÁNICA',
      paginas: 29,
      codigoAutor: 5,
      nombreAutor: 'MARTIN',
      apellidoAutor: 'PORTA',
      fechaMuerteAutor: null,
      tipoAutor: 'PRINCIPAL',
      diasPrestamo: 14,
    },

]);

//HISTORIAL

await Historial_prestamo.bulkCreate([
  {
    fechaPrestamo: new Date('2020-01-20'),
    fechaDevolucion: new Date('2020-01-27'),
    MiembroRut: '1111111-1', // Aquí agregamos el rut del miembro
    LibroIsbn: '111-1111111-111', // Aquí agregamos el isbn del libro
  },
  {
    fechaPrestamo: new Date('2020-01-20'),
    fechaDevolucion: new Date('2020-01-30'),
    MiembroRut: '5555555-5',
    LibroIsbn: '222-2222222-222',
  },
  {
    fechaPrestamo: new Date('2020-01-22'),
    fechaDevolucion: new Date('2020-01-30'),
    MiembroRut: '3333333-3',
    LibroIsbn: '333-3333333-333',
  },
  {
    fechaPrestamo: new Date('2020-01-23'),
    fechaDevolucion: new Date('2020-01-30'),
    MiembroRut: '4444444-4',
    LibroIsbn: '444-4444444-444',
  },
  {
    fechaPrestamo: new Date('2020-01-27'),
    fechaDevolucion: new Date('2020-02-04'),
    MiembroRut: '2222222-2',
    LibroIsbn: '111-1111111-111',
  },
  {
    fechaPrestamo: new Date('2020-01-31'),
    fechaDevolucion: new Date('2020-02-12'),
    MiembroRut: '1111111-1',
    LibroIsbn: '444-4444444-444',
  },
  {
    fechaPrestamo: new Date('2020-01-31'),
    fechaDevolucion: new Date('2020-02-12'),
    MiembroRut: '3333333-3',
    LibroIsbn: '222-2222222-222',
  },
  // ... Puedes agregar más registros aquí
]);

// Consulta para mostrar libros con menos de 300 páginas
sequelize.query(
  "SELECT * FROM Libros WHERE paginas < 300",
  { type: QueryTypes.SELECT }
)
.then(libros => {
  console.log("Libros con menos de 300 páginas:");
  libros.forEach(libro => {
    console.log(`${libro.titulo} - ${libro.paginas} páginas`);
  });
})
.catch(error => {
  console.error("Error al buscar los libros:", error);
});



});
