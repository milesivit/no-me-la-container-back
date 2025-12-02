'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categoria_cargas',
      [
        {
          nombre: 'Carga General',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Carga Granel Seca',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Carga Refrigerada',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Carga Peligrosa (IMO)',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Sobredimensionada o Pesada',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria_cargas', null, {});
  },
};
