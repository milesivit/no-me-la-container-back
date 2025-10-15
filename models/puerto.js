'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puerto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Puerto.belongsTo(models.Ciudad, {
        foreignKey: 'ciudadId',
        as: 'ciudades' //alias 
      });
    }
  }
  Puerto.init({
    nombre: DataTypes.STRING,
    ciudadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Puerto',
  });
  return Puerto;
};