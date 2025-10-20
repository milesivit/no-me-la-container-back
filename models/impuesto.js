'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Impuesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Impuesto.hasMany(models.Factura_impuesto, {
        foreignKey: 'impuestoId', // nombre de la columna en Provincia
        as: 'facturaImpuesto'      // alias para incluir datos
      });
    }
  }
  Impuesto.init({
    codImpuesto: DataTypes.STRING,
    nombre: DataTypes.STRING,
    importe: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Impuesto',
  });
  return Impuesto;
};