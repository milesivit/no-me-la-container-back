'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medio_pagos', [
      {
        nombre: 'Efectivo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Tarjeta de Crédito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Tarjeta de Débito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Transferencia Bancaria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'MercadoPago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PayPal',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medio_pagos', null, {});
  }
};
