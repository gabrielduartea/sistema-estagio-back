import { Aluno } from './aluno.entity';

export const AlunoProviders = {
  provide: 'ALUNO_REPOSITORY',
  useValue: Aluno,
};
