import { Estudante } from './estudante.entity';

export const EstudanteProviders = {
  provide: 'ESTUDANTE_REPOSITORY',
  useValue: Estudante,
};
