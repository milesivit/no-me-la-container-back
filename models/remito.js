'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Remito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Remito.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'clientes' //alias 
      });
      Remito.belongsTo(models.Viaje, {
        foreignKey: 'viajeId',
        as: 'viajes' //alias 
      });
      Remito.belongsTo(models.carga_container, {
        foreignKey: 'containerCargaId',
        as: 'containersCarga' //alias 
      });
    }
  }
  Remito.init({
    nroRemito: DataTypes.STRING,
    clienteId: DataTypes.INTEGER,
    viajeId: DataTypes.INTEGER,
    containerCargaId: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    firmaReceptor: DataTypes.STRING,
    create_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Remito',
  });
  return Remito;
};