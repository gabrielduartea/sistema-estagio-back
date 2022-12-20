import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { EmpresaProviders } from './empresas.provider';

@Module({
  providers: [EmpresasService, EmpresaProviders],
  controllers: [EmpresasController],
})
export class EmpresasModule {}
