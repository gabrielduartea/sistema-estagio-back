import { Injectable, Inject } from '@nestjs/common';
import { Curso } from './curso.entity';
import { CursoDTO } from './dto/curso.dto';

@Injectable()
export class CursosService {
  constructor(
    @Inject('CURSO_REPOSITORY')
    private readonly cursosRepository: typeof Curso,
  ) {}

  async create(cursos: CursoDTO): Promise<Curso> {
    return await this.cursosRepository.create<Curso>({
      ...cursos,
    });
  }

  async findAll(): Promise<Curso[]> {
    return await this.cursosRepository.findAll<Curso>({});
  }

  async findOne(id): Promise<Curso> {
    return await this.cursosRepository.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return await this.cursosRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedCursos]] =
      await this.cursosRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedCursos };
  }
}
