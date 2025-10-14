'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Localidad.belongsTo(models.Provincia, {
        foreignKey: 'provinciaId',
        as: 'provincias' //alias 
      });
      Localidad.hasMany(models.Persona, {
        foreignKey: 'localidadId', // nombre de la columna en Provincia
        as: 'personas'      // alias para incluir datos
      });
    }
  }
  Localidad.init({
    nombre: DataTypes.STRING,
    provincia_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Localidad',
  });
  return Localidad;
};