import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Aluno } from '../alunos/aluno.entity';
import { Empresa } from '../empresas/empresa.entity';
import { Professor } from '../professores/professor.entity';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'estagios',
  createdAt: 'dataInclusao',
  updatedAt: 'dataAlteracao',
})
export class Estagio extends Model<Estagio> {
  @Column({
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    type: DataType.INTEGER,
    comment: 'Identificador sequêncial',
  })
  id: number;

  @Column({
    allowNull: false,
    field: 'aluno_id',
    type: DataType.INTEGER,
    comment: 'ID da aluno',
  })
  @ForeignKey(() => Aluno)
  alunoId: number;

  @Column({
    allowNull: false,
    field: 'empresa_id',
    type: DataType.INTEGER,
    comment: 'ID da empresa',
  })
  @ForeignKey(() => Empresa)
  empresaId: number;

  @Column({
    allowNull: false,
    field: 'professor_id',
    type: DataType.INTEGER,
    comment: 'ID do professor',
  })
  @ForeignKey(() => Professor)
  professorId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'supervisor',
    comment: 'Supervisor do aluno',
  })
  supervisor: string;

  @Column({
    allowNull: false,
    field: 'remuneracao',
    type: DataType.INTEGER,
    comment: 'Remuneração',
  })
  remuneracao: number;

  @Column({
    allowNull: false,
    field: 'ajuda',
    type: DataType.INTEGER,
    comment: 'Ajuda',
  })
  ajuda: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'horas_trabalho_semanais',
    comment: 'horas de trabalho semanais do aluno',
  })
  horasTrabalhoSemanais: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'codigo_seguro_saude',
    comment: 'codigo Seguro Saude do aluno',
  })
  codigoSeguroSaude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'companhia_seguro_saude',
    comment: 'companhia Seguro Saude do aluno',
  })
  companhiaSeguroSaude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'categoria',
    comment: 'categoria do aluno',
  })
  categoria: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'modalidade',
    comment: 'modalidade do aluno',
  })
  modalidade: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'plano_atividades',
    comment: 'plano de tividades do aluno',
  })
  planoAtividades: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'relatorios',
    comment: 'relatorios do aluno',
  })
  relatorios: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'status',
    comment: ' Status',
  })
  status: string;

  @Column({
    allowNull: false,
    field: 'data_inicial',
    type: DataType.DATE,
    comment: 'Data Inicial.',
    defaultValue: DataType.NOW,
  })
  dataInicial: Date;

  @Column({
    allowNull: false,
    field: 'data_final',
    type: DataType.DATE,
    comment: 'Data final.',
    defaultValue: DataType.NOW,
  })
  dataFinal: Date;

  @Column({
    allowNull: false,
    field: 'data_inclusao',
    type: DataType.DATE,
    comment: 'Data de inclusão do registro.',
    defaultValue: DataType.NOW,
  })
  dataInclusao: Date;

  @Column({
    allowNull: false,
    field: 'data_alteracao',
    type: DataType.DATE,
    comment: 'Data da última alteração.',
    defaultValue: DataType.NOW,
  })
  dataAlteracao: Date;
}
