import { Estagio } from './estagio.entity';

export const EstagiosProvider = {
  provide: 'ESTAGIO_REPOSITORY',
  useValue: Estagio,
};
