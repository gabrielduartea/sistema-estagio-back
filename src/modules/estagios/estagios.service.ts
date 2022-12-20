import { Inject, Injectable } from '@nestjs/common';
import { EstagioDTO } from './dto/estagio.dto';
import { Estagio } from './estagio.entity';

@Injectable()
export class EstagiosService {
  constructor(
    @Inject('ESTAGIO_REPOSITORY')
    private readonly estagiosRepository: typeof Estagio,
  ) {}

  async create(professores: EstagioDTO): Promise<Estagio> {
    return await this.estagiosRepository.create<Estagio>({
      ...professores,
    });
  }

  async findAll(): Promise<Estagio[]> {
    return await this.estagiosRepository.findAll<Estagio>({});
  }

  async findOne(id): Promise<Estagio> {
    return await this.estagiosRepository.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return await this.estagiosRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedEstagio]] =
      await this.estagiosRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedEstagio };
  }
}
