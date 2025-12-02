'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Puertos', [
      { nombre: 'Puerto de Buenos Aires', ciudadId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Terminal Zárate', ciudadId: 2, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Santos', ciudadId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Río de Janeiro', ciudadId: 4, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Valparaíso', ciudadId: 5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Santiago Sec.', ciudadId: 6, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Montevideo', ciudadId: 7, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Punta del Este', ciudadId: 8, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Nueva York', ciudadId: 9, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Los Ángeles', ciudadId: 10, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Vancouver', ciudadId: 11, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Toronto', ciudadId: 12, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Veracruz', ciudadId: 13, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Guadalajara Sec.', ciudadId: 14, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Barcelona', ciudadId: 15, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Madrid Sec.', ciudadId: 16, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Marsella', ciudadId: 17, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de París Fluvial', ciudadId: 18, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Hamburgo', ciudadId: 19, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Berlín Fluvial', ciudadId: 20, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Génova', ciudadId: 21, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Nápoles', ciudadId: 22, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Liverpool', ciudadId: 23, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Londres', ciudadId: 24, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Lisboa', ciudadId: 25, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Oporto', ciudadId: 26, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Róterdam', ciudadId: 27, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Ámsterdam', ciudadId: 28, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Estocolmo', ciudadId: 29, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Gotemburgo', ciudadId: 30, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Oslo', ciudadId: 31, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Bergen', ciudadId: 32, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Yokohama', ciudadId: 33, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Osaka', ciudadId: 34, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Shanghái', ciudadId: 35, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Shenzhen', ciudadId: 36, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Busan', ciudadId: 37, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Seúl Sec.', ciudadId: 38, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Mumbai', ciudadId: 39, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Nueva Delhi Sec.', ciudadId: 40, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Sídney', ciudadId: 41, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Melbourne', ciudadId: 42, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Auckland', ciudadId: 43, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Wellington', ciudadId: 44, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Ciudad del Cabo', ciudadId: 45, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Johannesburgo Sec.', ciudadId: 46, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Alejandría', ciudadId: 47, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de El Cairo Fluvial', ciudadId: 48, createdAt: new Date(), updatedAt: new Date() },

      { nombre: 'Puerto de Estambul', ciudadId: 49, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Puerto de Ankara Sec.', ciudadId: 50, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Puertos', null, {});
  }
};
