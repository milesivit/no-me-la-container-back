'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cargo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cargo.hasMany(models.Empleado, {
        foreignKey: 'cargoId', // nombre de la columna en Provincia
        as: 'empleados'      // alias para incluir datos
      });
    }
  }
  Cargo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cargo',
  });
  return Cargo;
};