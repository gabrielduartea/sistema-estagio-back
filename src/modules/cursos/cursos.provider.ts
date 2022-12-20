import { Curso } from './curso.entity';

export const CursoProviders = {
  provide: 'CURSO_REPOSITORY',
  useValue: Curso,
};
