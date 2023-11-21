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
import { SupervisorDto } from './dto/supervisor.dto';
import { Supervisor } from './supervisor.entity';
import { SupervisoresService } from './supervisores.service';

@Controller('supervisores')
export class SupervisoresController {
  constructor(private readonly supervisoresService: SupervisoresService) {}

  @Get('findAll')
  async findAll() {
    return await this.supervisoresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Supervisor> {
    const supervisor = await this.supervisoresService.findOne(id);

    if (!supervisor) {
      throw new NotFoundException("This supervisor doesn't exist");
    }

    return supervisor;
  }

  @Post('create')
  async create(
    @Body() supervisor: SupervisorDto,
    @Request() req,
  ): Promise<Supervisor> {
    return await this.supervisoresService.create(supervisor);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() supervisor: SupervisorDto,
    @Request() req,
  ): Promise<Supervisor> {
    const { numberOfAffectedRows, updatedSupervisores } =
      await this.supervisoresService.update(id, supervisor);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedSupervisores;
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.supervisoresService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }

  @Get('findAllEmpresa/:id')
  async findAllEmpresa(@Param('id') id: number) {
    const supervisor = await this.supervisoresService.findAllEmpresa(id);
    return supervisor;
  }
}
