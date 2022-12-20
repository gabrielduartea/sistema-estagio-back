('use strict');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('periodo', {
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
      estagio_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'estagio',
          key: 'id',
        },
      },
      nome: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      supervisor: {
        type: Sequelize.STRING,
      },
      remuneracao: {
        type: Sequelize.INTEGER,
      },
      ajuda: {
        type: Sequelize.INTEGER,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('periodo');
  },
};
