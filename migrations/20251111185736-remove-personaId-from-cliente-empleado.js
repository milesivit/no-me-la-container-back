'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Clientes', 'personaId');
    await queryInterface.removeColumn('Empleados', 'personaId');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Clientes', 'personaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Personas',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.addColumn('Empleados', 'personaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Personas',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }
};
