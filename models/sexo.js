'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sexo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sexo.hasMany(models.Cliente, {
        foreignKey: 'sexoId', // nombre de la columna en Provincia
        as: 'clientes'      // alias para incluir datos
      });
      Sexo.hasMany(models.Empleado, {
        foreignKey: 'sexoId', // nombre de la columna en Provincia
        as: 'empleados'      // alias para incluir datos
      });
    }
  }
  Sexo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sexo',
  });
  return Sexo;
};