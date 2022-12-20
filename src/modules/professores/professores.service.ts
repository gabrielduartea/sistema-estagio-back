import { Injectable, Inject } from '@nestjs/common';
import { ProfessorDto } from './dto/professor.dto';
import { Professor } from './professor.entity';

@Injectable()
export class ProfessoresService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private readonly professoresRepository: typeof Professor,
  ) {}

  async create(professores: ProfessorDto): Promise<Professor> {
    return await this.professoresRepository.create<Professor>({
      ...professores,
    });
  }

  async findAll(): Promise<Professor[]> {
    return await this.professoresRepository.findAll<Professor>({});
  }

  async findOne(id): Promise<Professor> {
    return await this.professoresRepository.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return await this.professoresRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedProfessores]] =
      await this.professoresRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedProfessores };
  }
}
