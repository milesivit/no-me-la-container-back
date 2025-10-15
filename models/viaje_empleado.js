'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viaje_empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Viaje_empleado.belongsTo(models.Viaje, {
        foreignKey: 'viajeId',
        as: 'viajes' //alias 
      });
      Viaje_empleado.belongsTo(models.Empleado, {
        foreignKey: 'empleadoId',
        as: 'empleados' //alias 
      });
    }
  }
  Viaje_empleado.init({
    viajeId: DataTypes.INTEGER,
    empleadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Viaje_empleado',
  });
  return Viaje_empleado;
};