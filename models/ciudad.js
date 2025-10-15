'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ciudad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ciudad.belongsTo(models.Pais, {
        foreignKey: 'paisId',
        as: 'paises' //alias 
      });
      Ciudad.hasMany(models.Puerto, {
        foreignKey: 'ciudadId', // nombre de la columna en Provincia
        as: 'puertos'      // alias para incluir datos
      });
    }
  }
  Ciudad.init({
    nombre: DataTypes.STRING,
    pais_id: DataTypes.INTEGER,
    latitud: DataTypes.FLOAT,
    longitud: DataTypes.FLOAT,
    openweather_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ciudad',
  });
  return Ciudad;
};