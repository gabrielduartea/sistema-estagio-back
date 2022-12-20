import { Empresa } from './empresa.entity';

export const EmpresaProviders = {
  provide: 'EMPRESA_REPOSITORY',
  useValue: Empresa,
};
