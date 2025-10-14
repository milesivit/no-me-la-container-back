'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.belongsTo(models.razon_social, {
        foreignKey: 'razonSocialId',
        as: 'razonesSociales' //alias 
      });
      Cliente.belongsTo(models.condicion_fiscal, {
        foreignKey: 'condicionFiscalId',
        as: 'condicionesFiscales' //alias 
      });
      Cliente.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'personas' //alias 
      });
      Cliente.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuarios' //alias 
      });
    }
  }
  Cliente.init({
    personaId: DataTypes.INTEGER,
    cuil: DataTypes.STRING,
    telefono: DataTypes.STRING,
    razonSocialId: DataTypes.INTEGER,
    condicionFiscalId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    observacion: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};