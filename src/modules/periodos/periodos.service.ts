import { Inject, Injectable } from '@nestjs/common';
import { PeriodoDTO } from './dto/periodo.dto';
import { Periodo } from './periodos.entity';

@Injectable()
export class PeriodosService {
  constructor(
    @Inject('PERIODO_REPOSITORY')
    private readonly periodosRepository: typeof Periodo,
  ) {}

  async create(periodos: PeriodoDTO): Promise<Periodo> {
    return await this.periodosRepository.create<Periodo>({
      ...periodos,
    });
  }

  async findAll(): Promise<Periodo[]> {
    return await this.periodosRepository.findAll<Periodo>({});
  }

  async findOne(id): Promise<Periodo> {
    return await this.periodosRepository.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return await this.periodosRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedPeriodo]] =
      await this.periodosRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedPeriodo };
  }
}
