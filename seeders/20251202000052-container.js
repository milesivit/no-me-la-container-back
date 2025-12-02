'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Containers', [
      {
        codigo: 'MAEU1023456',
        capacidad_max: 33,
        container_estado_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'MSCU2045678',
        capacidad_max: 67,
        container_estado_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'CMAU3098765',
        capacidad_max: 76,
        container_estado_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'HLCU4567890',
        capacidad_max: 33,
        container_estado_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'ONEU5678901',
        capacidad_max: 67,
        container_estado_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'EMCU6789012',
        capacidad_max: 76,
        container_estado_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'TGHU7890123',
        capacidad_max: 33,
        container_estado_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'WHLU8901234',
        capacidad_max: 67,
        container_estado_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'BMOU9012345',
        capacidad_max: 33,
        container_estado_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'SEGU0123456',
        capacidad_max: 67,
        container_estado_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Containers', null, {});
  }
};
