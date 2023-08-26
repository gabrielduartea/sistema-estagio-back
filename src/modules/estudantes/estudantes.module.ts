import { Module } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { EstudantesController } from './estudantes.controller';
import { EstudanteProviders } from './estudantes.provider';

@Module({
  providers: [EstudantesService, EstudanteProviders],
  controllers: [EstudantesController],
  exports: [EstudantesService, EstudanteProviders],
})
export class EstudantesModule {}
