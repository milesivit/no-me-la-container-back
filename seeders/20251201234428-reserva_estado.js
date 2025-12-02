'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reserva_estados', [
      {
        nombre: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Confirmada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Asignada a viaje',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'En tránsito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Completada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cancelada',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reserva_estados', null, {});
  }
};
