import { Injectable, Inject } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
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

  async gerarRelatorioNumeroEstagiarios(status) {
    let filtroStatus = `where status='${status}'`;
    if (status == 'Todos') {
      filtroStatus = ``;
    }
    const sql = `
    select
	nome,count(professor_id)
from
	professor
left join estagio e on professor.id=professor_id
${filtroStatus}
group by nome
    `;
    const consultaItens = await Professor.sequelize.query(sql, {
      type: QueryTypes.SELECT,
    });
    return consultaItens;
  }

  async gerarRelatorioEstagiosPorProfessor(filtros: any) {
    const professorId = filtros.professorId;
    const status = filtros.status;
    let filtroStatus = `where status='${status}'`;
    if (status == 'Todos') {
      filtroStatus = ``;
    }
    const sql = `
    select
	nome,count(professor_id)
from
	professor
left join estagio e on professor.id = professor_id
left join estudante a on estudante.id = e.estudante_id 
${filtroStatus}
and id=${professorId}
group by nome
    `;
    const consultaItens = await Professor.sequelize.query(sql, {
      type: QueryTypes.SELECT,
    });
    return consultaItens;
  }
}
