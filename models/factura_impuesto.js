'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura_impuesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Factura_impuesto.belongsTo(models.Impuesto, {
        foreignKey: 'impuestoId',
        as: 'impuestos' //alias 
      });
      Factura_impuesto.belongsTo(models.Factura, {
        foreignKey: 'facturaId',
        as: 'facturas' //alias 
      });
    }
  }
  Factura_impuesto.init({
    impuestoId: DataTypes.INTEGER,
    facturaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Factura_impuesto',
  });
  return Factura_impuesto;
};