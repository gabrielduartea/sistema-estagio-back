import { Inject, Injectable } from '@nestjs/common';
import { EmpresaDTO } from './dto/empresa.dto';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @Inject('EMPRESA_REPOSITORY')
    private readonly empresasRepository: typeof Empresa,
  ) {}

  async create(professores: EmpresaDTO): Promise<Empresa> {
    return await this.empresasRepository.create<Empresa>({
      ...professores,
    });
  }

  async findAll(): Promise<Empresa[]> {
    return await this.empresasRepository.findAll<Empresa>({});
  }

  async findOne(id): Promise<Empresa> {
    return await this.empresasRepository.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return await this.empresasRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedEmpresas]] =
      await this.empresasRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedEmpresas };
  }
}
