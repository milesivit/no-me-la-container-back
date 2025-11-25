'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Eliminar columna vieja
    await queryInterface.removeColumn('Reservas', 'cargaContainerId');

    // Agregar columna nueva viajeContainerId
    await queryInterface.addColumn('Reservas', 'viajeContainerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Viaje_containers', // nombre EXACTO de la tabla
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    // Revertir los cambios si fuera necesario

    await queryInterface.addColumn('Reservas', 'cargaContainerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'carga_containers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.removeColumn('Reservas', 'viajeContainerId');
  }
};
