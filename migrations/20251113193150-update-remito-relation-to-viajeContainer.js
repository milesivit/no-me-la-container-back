'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    //1. Borrar la vieja columna
    await queryInterface.removeColumn('Remitos', 'containerCargaId');

    //2. Agregar la nueva columna con la foreign key
    await queryInterface.addColumn('Remitos', 'viajeContainerId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Viaje_containers', // nombre de la tabla relacionada
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    // Revertir los cambios
    await queryInterface.removeColumn('Remitos', 'viajeContainerId');
    await queryInterface.addColumn('Remitos', 'containerCargaId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'carga_containers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  }
};
