import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Professor } from 'src/modules/professores/professor.entity';
import { Aluno } from 'src/modules/alunos/aluno.entity';
import { Curso } from 'src/modules/cursos/curso.entity';
import { Empresa } from 'src/modules/empresas/empresa.entity';
import { Estagio } from 'src/modules/estagios/estagio.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Professor, Aluno, Curso, Empresa, Estagio]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
