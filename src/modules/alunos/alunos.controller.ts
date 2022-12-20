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
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Aluno } from './aluno.entity';
import { AlunosService } from './alunos.service';
import { AlunoDto } from './dto/aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Get('findAll')
  async findAll() {
    return await this.alunosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Aluno> {
    const aluno = await this.alunosService.findOne(id);

    if (!aluno) {
      throw new NotFoundException("This aluno doesn't exist");
    }

    return aluno;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() aluno: AlunoDto, @Request() req): Promise<Aluno> {
    return await this.alunosService.create(aluno);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() aluno: AlunoDto,
    @Request() req,
  ): Promise<Aluno> {
    const { numberOfAffectedRows, updatedAlunos } =
      await this.alunosService.update(id, aluno);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedAlunos;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.alunosService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }
}
