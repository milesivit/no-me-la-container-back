'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medio_pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medio_pago.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'medio_pago',
  });
  return medio_pago;
};