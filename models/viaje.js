'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Viaje.hasMany(models.Viaje_container, {
        foreignKey: 'viajeId', // nombre de la columna en Provincia
        as: 'viajesContainer'      // alias para incluir datos
      });
      Viaje.hasMany(models.Viaje_empleado, {
        foreignKey: 'viajeId', // nombre de la columna en Provincia
        as: 'viajesEmpleado'      // alias para incluir datos
      });
      Viaje.belongsTo(models.Puerto, {
        foreignKey: 'puertoOrigenId',
        as: 'puertoOrigen' //alias 
      });
      Viaje.belongsTo(models.Puerto, {
        foreignKey: 'puertoDestinoId',
        as: 'puertoDestino' //alias 
      });
      Viaje.belongsTo(models.viaje_estado, {
        foreignKey: 'viajeEstadoID',
        as: 'viajeEstado' //alias 
      });
      Viaje.belongsTo(models.Barco, {
        foreignKey: 'barco',
        as: 'barcos' //alias 
      });
      Viaje.hasMany(models.Reserva_viaje, {
        foreignKey: 'viajeId', // nombre de la columna en Provincia
        as: 'viajesReserva'      // alias para incluir datos
      });
      Viaje.hasMany(models.Remito, {
        foreignKey: 'viajeId', // nombre de la columna en Provincia
        as: 'remitos'      // alias para incluir datos
      });
    }
  }
  Viaje.init({
    barco: DataTypes.INTEGER,
    puertoOrigenId: DataTypes.INTEGER,
    puertoDestinoId: DataTypes.INTEGER,
    fechaSalida: DataTypes.DATE,
    promesaDeEntrega: DataTypes.DATE,
    viajeEstadoID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Viaje',
  });
  return Viaje;
};