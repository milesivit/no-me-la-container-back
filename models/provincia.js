'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provincia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Provincia.belongsTo(models.Pais, {
        foreignKey: 'paisId',
        as: 'pais' //alias 
      });
      Provincia.hasMany(models.Localidad, {
        foreignKey: 'provinciaId', // nombre de la columna en Provincia
        as: 'localidades'      // alias para incluir datos
      });
    }
  }
  Provincia.init({
    nombre: DataTypes.STRING,
    paisId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Provincia',
  });
  return Provincia;
};