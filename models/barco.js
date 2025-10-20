'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Barco.hasMany(models.Viaje, {
        foreignKey: 'barco', // nombre de la columna en Provincia
        as: 'viajes'      // alias para incluir datos
      });
    }
  }
  Barco.init({
    nombre: DataTypes.STRING,
    nroRegistro: DataTypes.STRING,
    nroMatricula: DataTypes.STRING,
    modelo: DataTypes.STRING,
    constructura: DataTypes.STRING,
    capacidadMaxContainer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barco',
  });
  return Barco;
};