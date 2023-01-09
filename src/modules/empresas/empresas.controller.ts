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
import { EmpresaDTO } from './dto/empresa.dto';
import { Empresa } from './empresa.entity';
import { EmpresasService } from './empresas.service';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Get('findAll')
  async findAll() {
    return await this.empresasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Empresa> {
    const empresa = await this.empresasService.findOne(id);

    if (!empresa) {
      throw new NotFoundException("This empresa doesn't exist");
    }

    return empresa;
  }

  @Post('create')
  async create(@Body() empresa: EmpresaDTO, @Request() req): Promise<Empresa> {
    return await this.empresasService.create(empresa);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() empresa: EmpresaDTO,
    @Request() req,
  ): Promise<Empresa> {
    const { numberOfAffectedRows, updatedEmpresas } =
      await this.empresasService.update(id, empresa);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedEmpresas;
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.empresasService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }
}
