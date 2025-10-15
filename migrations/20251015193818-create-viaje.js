'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Viajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Barcos', // nombre de la tabla referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      puertoOrigenId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Puertos', // nombre de la tabla referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      puertoDestinoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Puertos', // nombre de la tabla referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fechaSalida: {
        type: Sequelize.DATE
      },
      promesaDeEntrega: {
        type: Sequelize.DATE
      },
      viajeEstadoID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'viaje_estados', // nombre de la tabla referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Viajes');
  }
};