import { Injectable, Inject } from '@nestjs/common';
import { Curso } from '../cursos/curso.entity';
import { Estudante } from './estudante.entity';
import { EstudanteDto } from './dto/estudante.dto';

@Injectable()
export class EstudantesService {
  constructor(
    @Inject('ESTUDANTE_REPOSITORY')
    private readonly estudantesRepository: typeof Estudante,
  ) {}

  async create(estudantes: EstudanteDto): Promise<Estudante> {
    return await this.estudantesRepository.create<Estudante>({
      ...estudantes,
    });
  }

  async findAll(): Promise<Estudante[]> {
    return await this.estudantesRepository.findAll<Estudante>({
      include: [{ model: Curso }],
    });
  }

  async findOne(id): Promise<Estudante> {
    return await this.estudantesRepository.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return await this.estudantesRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedEstudantes]] =
      await this.estudantesRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedEstudantes };
  }
}
