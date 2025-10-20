'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factura_estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      factura_estado.hasMany(models.Factura, {
        foreignKey: 'facturaEstadoId', // nombre de la columna en Provincia
        as: 'Facturas'      // alias para incluir datos
      });
    }
  }
  factura_estado.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'factura_estado',
  });
  return factura_estado;
};