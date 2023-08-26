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
import { Estudante } from './estudante.entity';
import { EstudantesService } from './estudantes.service';
import { EstudanteDto } from './dto/estudante.dto';

@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}

  @Get('findAll')
  async findAll() {
    return await this.estudantesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Estudante> {
    const estudante = await this.estudantesService.findOne(id);

    if (!estudante) {
      throw new NotFoundException("This estudante doesn't exist");
    }

    return estudante;
  }

  @Post('create')
  async create(@Body() estudante: EstudanteDto): Promise<Estudante> {
    return await this.estudantesService.create(estudante);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() estudante: EstudanteDto,
    @Request() req,
  ): Promise<Estudante> {
    const { numberOfAffectedRows, updatedEstudantes } =
      await this.estudantesService.update(id, estudante);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedEstudantes;
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.estudantesService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }
}
