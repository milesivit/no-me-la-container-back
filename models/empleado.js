'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    static associate(models) {
      // Relaciones con otras tablas
      Empleado.belongsTo(models.Cargo, {
        foreignKey: 'cargoId',
        as: 'cargo'
      });
      Empleado.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario'
      });
      Empleado.belongsTo(models.Sexo, {
        foreignKey: 'sexoId',
        as: 'sexo'
      });
      Empleado.belongsTo(models.Pais, {
        foreignKey: 'paisId',
        as: 'pais'
      });
      Empleado.hasMany(models.Viaje_empleado, {
        foreignKey: 'empleadoId',
        as: 'viajesEmpleado'
      });
    }
  }

  Empleado.init({
    cargoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    numeroLegajo: DataTypes.STRING,
    licencia: DataTypes.BOOLEAN,
    cbu: DataTypes.STRING,
    cuil: DataTypes.STRING,
    dni: DataTypes.STRING,
    sexoId: DataTypes.INTEGER,
    paisId: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Empleado',
  });

  return Empleado;
};
