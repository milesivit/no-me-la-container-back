'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // CLIENTE
    await queryInterface.addColumn('Clientes', 'dni', { type: Sequelize.STRING });
    await queryInterface.addColumn('Clientes', 'sexoId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Sexos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Clientes', 'paisId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Pais',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Clientes', 'direccion', { type: Sequelize.STRING });
    await queryInterface.addColumn('Clientes', 'fecha_nacimiento', { type: Sequelize.DATE });

    // EMPLEADO
    await queryInterface.addColumn('Empleados', 'dni', { type: Sequelize.STRING });
    await queryInterface.addColumn('Empleados', 'sexoId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Sexos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Empleados', 'paisId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Pais',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Empleados', 'direccion', { type: Sequelize.STRING });
    await queryInterface.addColumn('Empleados', 'fecha_nacimiento', { type: Sequelize.DATE });
  },

  async down(queryInterface, Sequelize) {
    // revertir cambios
    await queryInterface.removeColumn('Clientes', 'dni');
    await queryInterface.removeColumn('Clientes', 'sexoId');
    await queryInterface.removeColumn('Clientes', 'paisId');
    await queryInterface.removeColumn('Clientes', 'direccion');
    await queryInterface.removeColumn('Clientes', 'fecha_nacimiento');

    await queryInterface.removeColumn('Empleados', 'dni');
    await queryInterface.removeColumn('Empleados', 'sexoId');
    await queryInterface.removeColumn('Empleados', 'paisId');
    await queryInterface.removeColumn('Empleados', 'direccion');
    await queryInterface.removeColumn('Empleados', 'fecha_nacimiento');
  }
};
