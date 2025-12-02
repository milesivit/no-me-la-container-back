'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('factura_estados', [
      {
        nombre: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Pagada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cancelada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Rechazada',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('factura_estados', null, {});
  }
};
