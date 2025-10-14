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
      // un pais muchas provincias
      Pais.hasMany(models.Provincia, {
        foreignKey: 'paisId', // nombre de la columna en Provincia
        as: 'provincias'      // alias para incluir datos
      });
      Pais.hasMany(models.Persona, {
        foreignKey: 'paisId', // nombre de la columna en Provincia
        as: 'personas'      // alias para incluir datos
      });
    }
  }
  Pais.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pais',
  });
  return Pais;
};