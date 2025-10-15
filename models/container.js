'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Container extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Container.belongsTo(models.container_estado, {
        foreignKey: 'container_estado_id',
        as: 'containersEstados'
      });
      Container.hasMany(models.carga_container, {
        foreignKey: 'container_id', // nombre de la columna en Provincia
        as: 'cargaContainers'      // alias para incluir datos
      });
    }
  }
  Container.init({
    codigo: DataTypes.STRING,
    capacidad_max: DataTypes.FLOAT,
    container_estado_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Container',
  });
  return Container;
};