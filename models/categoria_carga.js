'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria_carga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categoria_carga.hasMany(models.carga_container, {
        foreignKey: 'categoria_carga_id', // nombre de la columna en Provincia
        as: 'cargaContainers'      // alias para incluir datos
      });
    }
  }
  categoria_carga.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoria_carga',
  });
  return categoria_carga;
};