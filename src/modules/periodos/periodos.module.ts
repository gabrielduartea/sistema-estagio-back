import { Module } from '@nestjs/common';

import { PeriodosController } from './periodos.controller';
import { Periodos } from './periodos.provider';
import { PeriodosService } from './periodos.service';

@Module({
  providers: [PeriodosService, Periodos],
  controllers: [PeriodosController],
})
export class PeriodosModule {}
