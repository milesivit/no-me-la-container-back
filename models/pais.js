'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pais.hasMany(models.Ciudad, {
        foreignKey: 'pais_Id', // nombre de la columna en Provincia
        as: 'ciudades'      // alias para incluir datos
      });
      Pais.hasMany(models.Empleado, {
        foreignKey: 'paisId', // nombre de la columna en Provincia
        as: 'empleados'      // alias para incluir datos
      });
      Pais.hasMany(models.Cliente, {
        foreignKey: 'paisId', // nombre de la columna en Provincia
        as: 'clientes'      // alias para incluir datos
      });
    }
  }
  Pais.init({
    nombre: DataTypes.STRING,
    codigo_iso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pais',
  });
  return Pais;
};