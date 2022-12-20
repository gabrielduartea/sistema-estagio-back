import { Module } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { ProfessorProviders } from './professores.provider';

@Module({
  providers: [ProfessoresService, ProfessorProviders],
  controllers: [ProfessoresController],
  exports: [ProfessoresService, ProfessorProviders],
})
export class ProfessoresModule {}
