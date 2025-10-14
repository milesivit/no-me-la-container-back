'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class condicion_fiscal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      condicion_fiscal.hasMany(models.Cliente, {
        foreignKey: 'condicionFiscalId', // nombre de la columna en Provincia
        as: 'clientes'      // alias para incluir datos
      });
    }
  }
  condicion_fiscal.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'condicion_fiscal',
  });
  return condicion_fiscal;
};