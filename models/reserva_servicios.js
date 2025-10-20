'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva_servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserva_servicios.belongsTo(models.Reserva, {
        foreignKey: 'reservaId',
        as: 'reservas' //alias 
      });
      Reserva_servicios.belongsTo(models.servicios_agregados, {
        foreignKey: 'servicioId',
        as: 'servicios' //alias 
      });
    }
  }
  Reserva_servicios.init({
    reservaId: DataTypes.INTEGER,
    servicioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva_servicios',
  });
  return Reserva_servicios;
};