import { Module } from '@nestjs/common';
import { SupervisoresController } from './supervisores.controller';
import { SupervisorProviders } from './supervisores.provider';
import { SupervisoresService } from './supervisores.service';

@Module({
  controllers: [SupervisoresController],
  providers: [SupervisoresService, SupervisorProviders],
  exports: [SupervisoresService, SupervisorProviders],
})
export class SupervisoresModule {}
