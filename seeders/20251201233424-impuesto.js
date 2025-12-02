'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Impuestos', [
      {
        codImpuesto: 'IVA21',
        nombre: 'IVA 21%',
        importe: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codImpuesto: 'IVA10',
        nombre: 'IVA 10.5%',
        importe: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codImpuesto: 'INT',
        nombre: 'Impuesto Interno',
        importe: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codImpuesto: 'PAIS',
        nombre: 'Impuesto PAÍS',
        importe: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codImpuesto: 'GAN',
        nombre: 'Percepción Ganancias',
        importe: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Impuestos', null, {});
  }
};
