'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Viaje_containers', 'cargaContainerId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'carga_containers', // nombre de la tabla relacionada
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Viaje_containers', 'cargaContainerId');
  }
};
