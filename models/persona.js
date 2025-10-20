'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Persona.belongsTo(models.Sexo, {
        foreignKey: 'sexoId',
        as: 'sexos' //alias 
      });
      Persona.belongsTo(models.Pais, {
        foreignKey: 'paisId',
        as: 'paises' //alias 
      });
      Persona.hasMany(models.Cliente, {
        foreignKey: 'personaId', // nombre de la columna en Provincia
        as: 'clientes'      // alias para incluir datos
      });
      Persona.hasMany(models.Empleado, {
        foreignKey: 'personaId', // nombre de la columna en Provincia
        as: 'empleados'      // alias para incluir datos
      });
    }
  }
  Persona.init({
    nombre: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    direccion: DataTypes.STRING,
    sexoId: DataTypes.INTEGER,
    dni: DataTypes.STRING,
    correo: DataTypes.STRING,
    paisId: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};