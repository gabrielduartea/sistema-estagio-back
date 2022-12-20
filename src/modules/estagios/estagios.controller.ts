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
import { EstagioDTO } from './dto/estagio.dto';
import { Estagio } from './estagio.entity';
import { EstagiosService } from './estagios.service';

@Controller('estagios')
export class EstagiosController {
  constructor(private readonly estagiosService: EstagiosService) {}

  @Get('findAll')
  async findAll() {
    return await this.estagiosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Estagio> {
    const estagio = await this.estagiosService.findOne(id);

    if (!estagio) {
      throw new NotFoundException("This estagio doesn't exist");
    }

    return estagio;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() estagio: EstagioDTO, @Request() req): Promise<Estagio> {
    return await this.estagiosService.create(estagio);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() estagio: EstagioDTO,
    @Request() req,
  ): Promise<Estagio> {
    const { numberOfAffectedRows, updatedEstagio } =
      await this.estagiosService.update(id, estagio);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedEstagio;
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
