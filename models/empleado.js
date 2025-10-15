'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empleado.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'persona'
      });
      Empleado.belongsTo(models.Cargo, {
        foreignKey: 'cargoId',
        as: 'cargo'
      });
      Empleado.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario'
      });
      Empleado.hasMany(models.Viaje_empleado, {
        foreignKey: 'empleadoId', // nombre de la columna en Provincia
        as: 'viajesEmpleado'      // alias para incluir datos
      });
    }
  }
  Empleado.init({
    personaId: DataTypes.INTEGER,
    cargoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    numeroLegajo: DataTypes.STRING,
    licencia: DataTypes.BOOLEAN,
    cbu: DataTypes.STRING,
    cuil: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Empleado',
  });
  return Empleado;
};