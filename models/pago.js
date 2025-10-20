'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pago.belongsTo(models.Factura, {
        foreignKey: 'facturaId',
        as: 'facturas' //alias 
      });
      Pago.belongsTo(models.medio_pago, {
        foreignKey: 'medioPagoId',
        as: 'mediosPago' //alias 
      });
    }
  }
  Pago.init({
    facturaId: DataTypes.INTEGER,
    medioPagoId: DataTypes.INTEGER,
    monto: DataTypes.FLOAT,
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pago',
  });
  return Pago;
};