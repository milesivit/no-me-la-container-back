'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carga_container extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carga_container.belongsTo(models.Container, {
        foreignKey: 'container_id',
        as: 'containers'
      });
      carga_container.belongsTo(models.categoria_carga, {
        foreignKey: 'categoria_carga_id',
        as: 'categoriasCarga'
      });
      carga_container.hasMany(models.Reserva, {
        foreignKey: 'cargaContainerId', // nombre de la columna en Provincia
        as: 'Reservas'      // alias para incluir datos
      });
      carga_container.hasMany(models.Remito, {
        foreignKey: 'containerCargaId', // nombre de la columna en Provincia
        as: 'remitos'      // alias para incluir datos
      });
    }
  }
  carga_container.init({
    container_id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    categoria_carga_id: DataTypes.INTEGER,
    observaciones: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'carga_container',
  });
  return carga_container;
};