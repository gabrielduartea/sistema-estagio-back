import { Inject, Injectable } from '@nestjs/common';
import { SupervisorDto } from './dto/supervisor.dto';
import { Supervisor } from './supervisor.entity';

@Injectable()
export class SupervisoresService {
  constructor(
    @Inject('SUPERVISOR_REPOSITORY')
    private readonly supervisoresRepository: typeof Supervisor,
  ) {}

  async create(supervisores: SupervisorDto): Promise<Supervisor> {
    return await this.supervisoresRepository.create<Supervisor>({
      ...supervisores,
    });
  }

  async findAll(): Promise<Supervisor[]> {
    return await this.supervisoresRepository.findAll<Supervisor>({});
  }

  async findOne(id): Promise<Supervisor> {
    return await this.supervisoresRepository.findOne({
      where: { id },
    });
  }

  async findAllEmpresa(id): Promise<Supervisor[]> {
    return await this.supervisoresRepository.findAll<Supervisor>({
      where: {
        empresaId: id,
      },
    });
  }

  async delete(id) {
    return await this.supervisoresRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedSupervisores]] =
      await this.supervisoresRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedSupervisores };
  }
}
