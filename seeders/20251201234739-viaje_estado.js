'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('viaje_estados', [
      {
        nombre: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Programado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'En puerto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'En navegación',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Arribado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Finalizado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cancelado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('viaje_estados', null, {});
  }
};
