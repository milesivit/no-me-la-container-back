'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva_viaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserva_viaje.belongsTo(models.Reserva, {
        foreignKey: 'reservaId',
        as: 'reservas' //alias 
      });
      Reserva_viaje.belongsTo(models.Viaje, {
        foreignKey: 'viajeId',
        as: 'viajes' //alias 
      });
    }
  }
  Reserva_viaje.init({
    reservaId: DataTypes.INTEGER,
    viajeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva_viaje',
  });
  return Reserva_viaje;
};