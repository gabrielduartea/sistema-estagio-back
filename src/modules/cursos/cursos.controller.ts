import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Curso } from './curso.entity';
import { CursosService } from './cursos.service';
import { CursoDTO } from './dto/curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get('findAll')
  async findAll() {
    return await this.cursosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Curso> {
    const curso = await this.cursosService.findOne(id);

    if (!curso) {
      throw new NotFoundException("This curso doesn't exist");
    }

    return curso;
  }

  @Post('create')
  async create(@Body() curso: CursoDTO): Promise<Curso> {
    return await this.cursosService.create(curso);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() curso: CursoDTO,
    @Request() req,
  ): Promise<Curso> {
    const { numberOfAffectedRows, updatedCursos } =
      await this.cursosService.update(id, curso);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedCursos;
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.cursosService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }
}
