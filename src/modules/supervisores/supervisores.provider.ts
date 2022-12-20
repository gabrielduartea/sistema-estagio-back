import { Supervisor } from './supervisor.entity';

export const SupervisorProviders = {
  provide: 'SUPERVISOR_REPOSITORY',
  useValue: Supervisor,
};
