'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viaje_container extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Viaje_container.belongsTo(models.Viaje, {
        foreignKey: 'viajeId',
        as: 'viajes' //alias 
      });
      Viaje_container.belongsTo(models.Container, {
        foreignKey: 'containerId',
        as: 'containers' //alias 
      });
    }
  }
  Viaje_container.init({
    viajeId: DataTypes.INTEGER,
    containerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Viaje_container',
  });
  return Viaje_container;
};