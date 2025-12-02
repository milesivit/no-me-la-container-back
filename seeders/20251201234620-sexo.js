'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sexos', [
      {
        nombre: 'Masculino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Femenino',
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
    await queryInterface.bulkDelete('Sexos', null, {});
  }
};
