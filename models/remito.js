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
      Remito.belongsTo(models.Viaje_container, {
        foreignKey: 'viajeContainerId',
        as: 'viajeContainer'
      });
    }
  }
  Remito.init({
    nroRemito: DataTypes.STRING,
    clienteId: DataTypes.INTEGER,
    viajeId: DataTypes.INTEGER,
    viajeContainerId: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    firmaReceptor: DataTypes.STRING,
    create_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Remito',
  });
  return Remito;
};