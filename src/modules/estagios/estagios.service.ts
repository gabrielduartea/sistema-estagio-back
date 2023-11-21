import { Inject, Injectable } from '@nestjs/common';
import { Estudante } from '../estudantes/estudante.entity';
import { Empresa } from '../empresas/empresa.entity';
import { Professor } from '../professores/professor.entity';
import { EstagioDTO } from './dto/estagio.dto';
import { Estagio } from './estagio.entity';
import { QueryTypes } from 'sequelize';
import { Supervisor } from '../supervisores/supervisor.entity';
import { Op } from 'sequelize';

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
    return await this.estagiosRepository.findAll<Estagio>({
      include: [
        {
          model: Estudante,
        },
        {
          model: Empresa,
        },
        {
          model: Supervisor,
        },
        {
          model: Professor,
        },
      ],
    });
  }

  async findOne(id): Promise<Estagio> {
    return await this.estagiosRepository.findOne({
      where: { id },
      include: [
        {
          model: Estudante,
        },
        {
          model: Empresa,
        },
        {
          model: Supervisor,
        },
      ],
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

  async findAllEstagios(id: number): Promise<Estagio[]> {
    return await this.estagiosRepository.findAll<Estagio>({
      where: {
        id,
      },
      include: [
        {
          model: Estudante,
        },
        {
          model: Empresa,
        },
        {
          model: Professor,
        },
        {
          model: Supervisor,
        },
      ],
    });
  }

  async gerarRelatorioEstagiosPorProfessor(filtros: Estagio) {
    const professorId = filtros.professorId;
    const status = filtros.status;
    let filtroStatus = `and status='${status}'`;
    if (status == 'Todos') {
      filtroStatus = ``;
    }
    const sql = `
    select
	est.nome as estudante,
	matricula,
	e.nome as empresa,
	p.nome as professor,
	s.nome as supervisor,
	es.data_inicial,
	es.data_final
from
	estagio es
left join empresa e on
	e.id = es.empresa_id
left join professor p on
	p.id = es.professor_id
left join estudante est on
	est.id = es.estudante_id
left join supervisor s on
	s.id = es.supervisor_id
where
	es.professor_id = ${professorId}
	${filtroStatus}`;
    const consultaItens = await Estagio.sequelize.query(sql, {
      type: QueryTypes.SELECT,
    });
    return consultaItens;
  }

  async gerarRelatorioEstagiosPorEmpresa(filtros: any) {
    const empresaId = filtros.empresaId;
    const status = filtros.status;
    let filtroStatus = `and status='${status}'`;
    if (status == 'Todos') {
      filtroStatus = ``;
    }
    const sql = `
    select
    est.nome as estudante,
    matricula,
    e.nome as empresa,
    p.nome as professor,
    s.nome as supervisor,
    es.data_inicial,
    es.data_final
from
    estagio es
left join empresa e on
    e.id = es.empresa_id
left join professor p on
    p.id = es.professor_id
left join estudante est on
    est.id = es.estudante_id
left join supervisor s on
    s.id = es.supervisor_id
where
	es.empresa_id = ${empresaId}
  ${filtroStatus}`;
    const consultaItens = await Estagio.sequelize.query(sql, {
      type: QueryTypes.SELECT,
    });
    return consultaItens;
  }

  async gerarRelatorioEstagios(filtros: any) {
    const status = filtros.status;
    let filtroStatus = `where status='${status}'`;
    if (status == 'Todos') {
      filtroStatus = ``;
    }
    const sql = `
    select
	a.nome as estudante,
	matricula,
	e.nome empresa,
	p.nome professor,
	s.nome supervisor,
	es.data_inicial,
	es.data_final
from
	estagio es
left join empresa e on
	e.id = es.empresa_id
left join professor p on
	p.id = es.professor_id
left join estudante a on
	a.id = es.estudante_id
left join supervisor s on
	s.id = es.supervisor_id
  ${filtroStatus}`;
    const consultaItens = await Estagio.sequelize.query(sql, {
      type: QueryTypes.SELECT,
    });
    return consultaItens;
  }

  async renovarEstagio(data) {
    const estagio = await Estagio.findOne({
      where: {
        id: data.estagioReferenteId,
      },
      include: [
        {
          model: Estudante,
        },
        {
          model: Empresa,
        },
        {
          model: Supervisor,
        },
        {
          model: Professor,
        },
      ],
    });
    const antigo = estagio.dataValues;
    let renovacao = [];
    if (estagio.renovacao) {
      renovacao = JSON.parse(estagio.renovacao);
    }
    renovacao.push(antigo);
    const formatado = JSON.stringify(renovacao);
    const renovado = Object.assign(estagio, data);
    estagio.renovacao = formatado;
    await estagio.save();
    console.log(estagio);
  }
}
