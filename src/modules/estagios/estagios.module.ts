import { Module } from '@nestjs/common';
import { EstagiosController } from './estagios.controller';
import { EstagiosService } from './estagios.service';
import { EstagiosProvider } from './estagios.providers';

@Module({
  controllers: [EstagiosController],
  providers: [EstagiosService, EstagiosProvider],
})
export class EstagiosModule {}
