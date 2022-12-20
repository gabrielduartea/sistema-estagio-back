import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { ProfessoresModule } from './modules/professores/professores.module';
import { ProfessoresService } from './modules/professores/professores.service';
import { AlunosService } from './modules/alunos/alunos.service';
import { AlunosModule } from './modules/alunos/alunos.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { CursosService } from './modules/cursos/cursos.service';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { EmpresasService } from './modules/empresas/empresas.service';
import { EstagiosModule } from './modules/estagios/estagios.module';
import { SupervisoresModule } from './modules/supervisores/supervisores.module';
import { PeriodosService } from './modules/periodos/periodos.service';
import { PeriodosModule } from './modules/periodos/periodos.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    PostsModule,
    ProfessoresModule,
    AlunosModule,
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
