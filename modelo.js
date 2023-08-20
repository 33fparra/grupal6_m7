import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("biblioteca", "root", "pipe1234", {
  host: "localhost",
  dialect: "mysql",
});

const Autor = sequelize.define("Autor", {
  rut: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechNac: {
    type: DataTypes.DATEONLY,
  },
});

const Libro = sequelize.define("Libro", {
  isbn: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paginas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  codigoAutor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombreAutor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidoAutor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaMuerteAutor: {
    type: DataTypes.DATEONLY,
  },
  tipoAutor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diasPrestamo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Historial_prestamo = sequelize.define("Historial_prestamo", {
  fechaPrestamo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaDevolucion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Autor.hasMany(Historial_prestamo);
Historial_prestamo.belongsTo(Autor);

Libro.hasMany(Historial_prestamo);
Historial_prestamo.belongsTo(Libro);

export { Historial_prestamo, Libro, Autor, sequelize };
