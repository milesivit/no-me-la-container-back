'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Factura.belongsTo(models.Reserva, {
        foreignKey: 'reservaId',
        as: 'reservas' //alias 
      });
      Factura.belongsTo(models.factura_estado, {
        foreignKey: 'facturaEstadoId',
        as: 'facturasEstado' //alias 
      });
      Factura.hasMany(models.Factura_impuesto, {
        foreignKey: 'facturaId', // nombre de la columna en Provincia
        as: 'facturaImpuesto'      // alias para incluir datos
      });
      Factura.hasMany(models.Pago, {
        foreignKey: 'facturaId', // nombre de la columna en Provincia
        as: 'Pagos'      // alias para incluir datos
      });
    }
  }
  Factura.init({
    numeroFactura: DataTypes.STRING,
    reservaId: DataTypes.INTEGER,
    fechaEmision: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    observacion: DataTypes.TEXT,
    facturaEstadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};