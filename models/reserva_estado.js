'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva_estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reserva_estado.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reserva_estado',
  });
  return reserva_estado;
};