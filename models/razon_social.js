'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class razon_social extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      razon_social.hasMany(models.Cliente, {
        foreignKey: 'razonSocialId', // nombre de la columna en Provincia
        as: 'clientes'      // alias para incluir datos
      });
    }
  }
  razon_social.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'razon_social',
  });
  return razon_social;
};