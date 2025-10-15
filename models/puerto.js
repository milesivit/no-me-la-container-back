'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puerto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Puerto.belongsTo(models.Ciudad, {
        foreignKey: 'ciudadId',
        as: 'ciudades' //alias 
      });
      Puerto.hasMany(models.Viaje, {
        foreignKey: 'puertoOrigenId', // nombre de la columna en Provincia
        as: 'ViajeOrigen'      // alias para incluir datos
      });
      Puerto.hasMany(models.Viaje, {
        foreignKey: 'puertoDestinoId', // nombre de la columna en Provincia
        as: 'ViajeDestino'      // alias para incluir datos
      });
    }
  }
  Puerto.init({
    nombre: DataTypes.STRING,
    ciudadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Puerto',
  });
  return Puerto;
};