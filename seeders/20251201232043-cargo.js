'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cargos', [
      {
        nombre: 'Capitán',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Primer Oficial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ingeniero Jefe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Oficial de Cubierta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Operador de Grúas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Supervisor de Carga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Administrativo de Puerto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Responsable de Logística',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Mecánico Naval',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Tripulante',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cargos', null, {});
  }
};
