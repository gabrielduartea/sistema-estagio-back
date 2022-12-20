import { Injectable, Inject } from '@nestjs/common';
import { Aluno } from './aluno.entity';
import { AlunoDto } from './dto/aluno.dto';

@Injectable()
export class AlunosService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private readonly alunosRepository: typeof Aluno,
  ) {}

  async create(alunos: AlunoDto): Promise<Aluno> {
    return await this.alunosRepository.create<Aluno>({
      ...alunos,
    });
  }

  async findAll(): Promise<Aluno[]> {
    return await this.alunosRepository.findAll<Aluno>({});
  }

  async findOne(id): Promise<Aluno> {
    return await this.alunosRepository.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return await this.alunosRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedAlunos]] =
      await this.alunosRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedAlunos };
  }
}
