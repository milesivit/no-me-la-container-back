'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicios_agregados', [
      {
        nombre: 'Seguro de carga estándar',
        codServicio: 'SEG-ST',
        coste: 15000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Seguro premium todo riesgo',
        codServicio: 'SEG-PR',
        coste: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Manipulación especializada',
        codServicio: 'MAN-ESP',
        coste: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Embalaje reforzado',
        codServicio: 'EMB-REF',
        coste: 8000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Monitoreo satelital',
        codServicio: 'MON-SAT',
        coste: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Servicio de refrigeración',
        codServicio: 'REF-CONT',
        coste: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carga y descarga asistida',
        codServicio: 'CDA-01',
        coste: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Verificación documental',
        codServicio: 'DOC-VER',
        coste: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios_agregados', null, {});
  }
};
