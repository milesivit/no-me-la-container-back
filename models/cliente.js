'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // Relaciones con otras tablas
      Cliente.belongsTo(models.razon_social, {
        foreignKey: 'razonSocialId',
        as: 'razonesSociales'
      });
      Cliente.belongsTo(models.condicion_fiscal, {
        foreignKey: 'condicionFiscalId',
        as: 'condicionesFiscales'
      });
      Cliente.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuarios'
      });
      Cliente.belongsTo(models.Sexo, {
        foreignKey: 'sexoId',
        as: 'sexo'
      });
      Cliente.belongsTo(models.Pais, {
        foreignKey: 'paisId',
        as: 'pais'
      });
      Cliente.hasMany(models.Reserva, {
        foreignKey: 'clienteId',
        as: 'clienteReservas'
      });
      Cliente.hasMany(models.Remito, {
        foreignKey: 'clienteId',
        as: 'remitos'
      });
    }
  }

  Cliente.init({
    cuil: DataTypes.STRING,
    telefono: DataTypes.STRING,
    razonSocialId: DataTypes.INTEGER,
    condicionFiscalId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    observacion: DataTypes.STRING,
    dni: DataTypes.STRING,
    sexoId: DataTypes.INTEGER,
    paisId: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cliente',
  });

  return Cliente;
};
