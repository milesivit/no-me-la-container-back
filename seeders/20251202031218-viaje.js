'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const viajes = [
      {
        barco: 1,
        puertoOrigenId: 1,
        puertoDestinoId: 10,
        fechaSalida: new Date('2025-01-12'),
        promesaDeEntrega: new Date('2025-01-30'),
        viajeEstadoID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 2,
        puertoOrigenId: 4,
        puertoDestinoId: 22,
        fechaSalida: new Date('2025-02-01'),
        promesaDeEntrega: new Date('2025-02-20'),
        viajeEstadoID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 3,
        puertoOrigenId: 7,
        puertoDestinoId: 3,
        fechaSalida: new Date('2025-03-05'),
        promesaDeEntrega: new Date('2025-03-28'),
        viajeEstadoID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 1,
        puertoOrigenId: 13,
        puertoDestinoId: 25,
        fechaSalida: new Date('2025-04-10'),
        promesaDeEntrega: new Date('2025-04-27'),
        viajeEstadoID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 4,
        puertoOrigenId: 30,
        puertoDestinoId: 18,
        fechaSalida: new Date('2025-05-02'),
        promesaDeEntrega: new Date('2025-05-19'),
        viajeEstadoID: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 2,
        puertoOrigenId: 40,
        puertoDestinoId: 5,
        fechaSalida: new Date('2025-06-07'),
        promesaDeEntrega: new Date('2025-06-28'),
        viajeEstadoID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 3,
        puertoOrigenId: 12,
        puertoDestinoId: 44,
        fechaSalida: new Date('2025-07-01'),
        promesaDeEntrega: new Date('2025-07-25'),
        viajeEstadoID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 3,
        puertoOrigenId: 38,
        puertoDestinoId: 41,
        fechaSalida: new Date('2025-08-15'),
        promesaDeEntrega: new Date('2025-09-05'),
        viajeEstadoID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 4,
        puertoOrigenId: 20,
        puertoDestinoId: 9,
        fechaSalida: new Date('2025-09-11'),
        promesaDeEntrega: new Date('2025-10-01'),
        viajeEstadoID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        barco: 1,
        puertoOrigenId: 47,
        puertoDestinoId: 28,
        fechaSalida: new Date('2025-11-03'),
        promesaDeEntrega: new Date('2025-11-23'),
        viajeEstadoID: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('viajes', viajes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('viajes', null, {});
  }
};
