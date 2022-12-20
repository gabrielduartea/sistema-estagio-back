import { Professor } from './professor.entity';

export const ProfessorProviders = {
  provide: 'PROFESSOR_REPOSITORY',
  useValue: Professor,
};
