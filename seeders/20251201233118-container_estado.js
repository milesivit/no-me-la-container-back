'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('container_estados', [
      {
        nombre: 'Disponible',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Reservado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'En tránsito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'En mantenimiento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Fuera de servicio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Dañado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('container_estados', null, {});
  }
};
