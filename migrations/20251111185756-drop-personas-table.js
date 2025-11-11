'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  },
  async down(queryInterface, Sequelize) {
    // si querés poder revertir:
    await queryInterface.createTable('Personas', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      nombre: Sequelize.STRING,
      fecha_nacimiento: Sequelize.DATE,
      direccion: Sequelize.STRING,
      sexoId: Sequelize.INTEGER,
      dni: Sequelize.STRING,
      correo: Sequelize.STRING,
      paisId: Sequelize.INTEGER,
      activo: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  }
};
