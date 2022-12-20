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
import { PeriodoDTO } from './dto/periodo.dto';
import { Periodo } from './periodos.entity';
import { PeriodosService } from './periodos.service';

@Controller('periodos')
export class PeriodosController {
  constructor(private readonly estagiosService: PeriodosService) {}

  @Get('findAll')
  async findAll() {
    return await this.estagiosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Periodo> {
    const estagio = await this.estagiosService.findOne(id);

    if (!estagio) {
      throw new NotFoundException("This estagio doesn't exist");
    }

    return estagio;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() estagio: PeriodoDTO, @Request() req): Promise<Periodo> {
    return await this.estagiosService.create(estagio);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() estagio: PeriodoDTO,
    @Request() req,
  ): Promise<Periodo> {
    const { numberOfAffectedRows, updatedPeriodo } =
      await this.estagiosService.update(id, estagio);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedPeriodo;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.estagiosService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }
}
