'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class container_estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      container_estado.hasMany(models.Container, {
        foreignKey: 'container_estado_id', // nombre de la columna en Provincia
        as: 'Containers'      // alias para incluir datos
      });
    }
  }
  container_estado.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'container_estado',
  });
  return container_estado;
};