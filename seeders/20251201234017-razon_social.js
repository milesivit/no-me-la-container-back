'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('razon_socials', [
      {
        nombre: 'Transporte Global Andino S.A.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Logística del Plata SRL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Servicios Marítimos Austral S.A.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cargas Internacionales del Sur S.R.L.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'OceanTrade Logistics Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Contenedores y Soluciones S.A.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Global Cargo Partners S.R.L.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maritime Express Holdings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Puertos Unidos Internacional S.A.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Otro',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('razon_socials', null, {});
  }
};
