('use strict');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estagio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      estudante_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'estudante',
          key: 'id',
        },
      },
      empresa_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'empresa',
          key: 'id',
        },
      },
      professor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'professor',
          key: 'id',
        },
      },
      supervisor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'supervisor',
          key: 'id',
        },
      },
      remuneracao: {
        type: Sequelize.FLOAT,
      },
      ajuda: {
        type: Sequelize.FLOAT,
      },
      codigo_seguro_saude: {
        type: Sequelize.STRING,
      },
      companhia_seguro_saude: {
        type: Sequelize.STRING,
      },
      horas_trabalho_semanais: {
        type: Sequelize.STRING,
      },
      categoria: {
        type: Sequelize.STRING,
      },
      modalidade: {
        type: Sequelize.STRING,
      },
      plano_atividades: {
        type: Sequelize.STRING,
      },
      relatorios: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      data_inicial: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      data_final: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      data_inclusao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      data_alteracao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      renovacao: {
        type: Sequelize.JSON,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estagio');
  },
};
