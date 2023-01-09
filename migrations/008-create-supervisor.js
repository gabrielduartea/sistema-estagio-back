'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('supervisor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      nome: {
        type: Sequelize.STRING,
      },
      empresa_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'empresa',
          key: 'id',
        },
      },
      telefone: {
        type: Sequelize.STRING,
      },
      data_inclusao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      data_alteracao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('supervisor');
  },
};
