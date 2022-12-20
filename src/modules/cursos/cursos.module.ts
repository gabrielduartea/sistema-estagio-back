import { Module } from '@nestjs/common';
import { CursoProviders } from './cursos.provider';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

@Module({
  providers: [CursoProviders, CursosService],
  controllers: [CursosController],
})
export class CursosModule {}
