import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfessorDto } from './dto/professor.dto';
import { Professor } from './professor.entity';
import { ProfessoresService } from './professores.service';
import { request } from 'http';

@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  @Get('findAll')
  async findAll() {
    return await this.professoresService.findAll();
  }

  @Get(':id/findOne')
  async findOne(@Param('id') id: number): Promise<Professor> {
    const professor = await this.professoresService.findOne(id);

    if (!professor) {
      throw new NotFoundException("This professor doesn't exist");
    }

    return professor;
  }

  @Post('create')
  async create(
    @Body() professor: ProfessorDto,
    @Request() req,
  ): Promise<Professor> {
    return await this.professoresService.create(professor);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() professor: ProfessorDto,
    @Request() req,
  ): Promise<Professor> {
    const { numberOfAffectedRows, updatedProfessores } =
      await this.professoresService.update(id, professor);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedProfessores;
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.professoresService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }

  @Get('relatorioNumeroEstagiarios/:status')
  async gerarRelatorioNumeroEstagiarios(@Param('status') status) {
    const filtros = status;
    return await this.professoresService.gerarRelatorioNumeroEstagiarios(
      filtros,
    );
  }

  @Get('relatorioEstagiosPorProfessor/:data')
  async gerarRelatorioEstagiosPorProfessor(@Param() data) {
    const filtros = JSON.parse(data.data);
    return await this.professoresService.gerarRelatorioEstagiosPorProfessor(
      filtros,
    );
  }
}
