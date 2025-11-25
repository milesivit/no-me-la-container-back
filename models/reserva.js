'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserva.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'clientes' //alias 
      });
      Reserva.belongsTo(models.Viaje_container, {
        foreignKey: 'viajeContainerId',
        as: 'viajesContainer'
      });
      Reserva.belongsTo(models.reserva_estado, {
        foreignKey: 'reservaEstadoId',
        as: 'reservasEstado' //alias 
      });
      Reserva.hasMany(models.Reserva_servicios, {
        foreignKey: 'reservaId', // nombre de la columna en Provincia
        as: 'ServiciosReserva'      // alias para incluir datos
      });
      Reserva.hasMany(models.Reserva_viaje, {
        foreignKey: 'reservaId', // nombre de la columna en Provincia
        as: 'ViajesReserva'      // alias para incluir datos
      });
      Reserva.hasMany(models.Factura, {
        foreignKey: 'reservaId', // nombre de la columna en Provincia
        as: 'Facturas'      // alias para incluir datos
      });
    }
  }
  Reserva.init({
    clienteId: DataTypes.INTEGER,
    viajeContainerId: DataTypes.INTEGER,
    fechaReserva: DataTypes.DATE,
    reservaEstadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};