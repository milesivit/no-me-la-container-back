'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('condicion_fiscals', [
      {
        nombre: 'Responsable Inscripto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Consumidor Final',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Monotributista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Exento',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('condicion_fiscals', null, {});
  }
};
