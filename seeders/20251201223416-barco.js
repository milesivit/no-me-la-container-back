'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Barcos', [
      {
        nombre: 'MSC Gülsün',
        nroRegistro: 'REG-001',
        nroMatricula: 'MAT-001',
        modelo: 'Ultra Large Container Vessel',
        constructura: 'Samsung Heavy Industries',
        capacidadMaxContainer: 23000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ever Given',
        nroRegistro: 'REG-002',
        nroMatricula: 'MAT-002',
        modelo: 'Golden-class',
        constructura: 'Imabari Shipbuilding',
        capacidadMaxContainer: 20388,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'HMM Algeciras',
        nroRegistro: 'REG-003',
        nroMatricula: 'MAT-003',
        modelo: 'MEGA Container',
        constructura: 'Daewoo Shipbuilding & Marine Engineering',
        capacidadMaxContainer: 23964,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'CMA CGM Jacques Saadé',
        nroRegistro: 'REG-004',
        nroMatricula: 'MAT-004',
        modelo: 'LNG-powered Container Ship',
        constructura: 'China State Shipbuilding Corporation',
        capacidadMaxContainer: 23000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Barcos', null, {});
  }
};
