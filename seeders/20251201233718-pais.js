'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pais', [
      { nombre: 'Argentina', codigo_iso: 'AR', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Brasil', codigo_iso: 'BR', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Chile', codigo_iso: 'CL', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Uruguay', codigo_iso: 'UY', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Estados Unidos', codigo_iso: 'US', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Canadá', codigo_iso: 'CA', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'México', codigo_iso: 'MX', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'España', codigo_iso: 'ES', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Francia', codigo_iso: 'FR', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Alemania', codigo_iso: 'DE', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Italia', codigo_iso: 'IT', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Reino Unido', codigo_iso: 'GB', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Portugal', codigo_iso: 'PT', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Países Bajos', codigo_iso: 'NL', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Suecia', codigo_iso: 'SE', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Noruega', codigo_iso: 'NO', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Japón', codigo_iso: 'JP', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'China', codigo_iso: 'CN', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Corea del Sur', codigo_iso: 'KR', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'India', codigo_iso: 'IN', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Australia', codigo_iso: 'AU', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Nueva Zelanda', codigo_iso: 'NZ', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Sudáfrica', codigo_iso: 'ZA', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Egipto', codigo_iso: 'EG', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Turquía', codigo_iso: 'TR', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pais', null, {});
  }
};
