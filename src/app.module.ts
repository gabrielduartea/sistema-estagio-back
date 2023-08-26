import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfessoresModule } from './modules/professores/professores.module';
import { EstudantesModule } from './modules/estudantes/estudantes.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { EstagiosModule } from './modules/estagios/estagios.module';
import { SupervisoresModule } from './modules/supervisores/supervisores.module';
import { PeriodosModule } from './modules/periodos/periodos.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    ProfessoresModule,
    EstudantesModule,
    CursosModule,
    EmpresasModule,
    EstagiosModule,
    SupervisoresModule,
    PeriodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
