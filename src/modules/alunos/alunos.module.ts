import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { AlunoProviders } from './alunos.provider';

@Module({
  providers: [AlunosService, AlunoProviders],
  controllers: [AlunosController],
  exports: [AlunosService, AlunoProviders],
})
export class AlunosModule {}
