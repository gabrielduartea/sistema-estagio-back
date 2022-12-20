import { Periodo } from './periodos.entity';

export const Periodos = {
  provide: 'PERIODO_REPOSITORY',
  useValue: Periodo,
};
