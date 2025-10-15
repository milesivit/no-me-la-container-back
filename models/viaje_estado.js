'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class viaje_estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      viaje_estado.hasMany(models.Viaje, {
        foreignKey: 'viajeEstadoID', // nombre de la columna en Provincia
        as: 'viaje'      // alias para incluir datos
      });
    }
  }
  viaje_estado.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'viaje_estado',
  });
  return viaje_estado;
};