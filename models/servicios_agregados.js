'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicios_agregados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicios_agregados.init({
    nombre: DataTypes.STRING,
    codServicio: DataTypes.STRING,
    coste: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'servicios_agregados',
  });
  return servicios_agregados;
};