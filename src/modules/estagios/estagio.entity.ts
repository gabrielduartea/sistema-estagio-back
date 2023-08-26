import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Estudante } from '../estudantes/estudante.entity';
import { Empresa } from '../empresas/empresa.entity';
import { Professor } from '../professores/professor.entity';
import { Supervisor } from '../supervisores/supervisor.entity';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'estagio',
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
    field: 'estudante_id',
    type: DataType.INTEGER,
    comment: 'ID da estudante',
  })
  @ForeignKey(() => Estudante)
  estudanteId: number;

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
    type: DataType.INTEGER,
    allowNull: false,
    field: 'supervisor_id',
    comment: 'Supervisor do estudante',
  })
  @ForeignKey(() => Supervisor)
  supervisorId: number;

  @Column({
    allowNull: false,
    field: 'remuneracao',
    type: DataType.FLOAT,
    comment: 'Remuneração',
  })
  remuneracao: number;

  @Column({
    allowNull: false,
    field: 'ajuda',
    type: DataType.FLOAT,
    comment: 'Ajuda',
  })
  ajuda: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'horas_trabalho_semanais',
    comment: 'horas de trabalho semanais do estudante',
  })
  horasTrabalhoSemanais: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'codigo_seguro_saude',
    comment: 'codigo Seguro Saude do estudante',
  })
  codigoSeguroSaude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'companhia_seguro_saude',
    comment: 'companhia Seguro Saude do estudante',
  })
  companhiaSeguroSaude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'categoria',
    comment: 'categoria do estudante',
  })
  categoria: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'modalidade',
    comment: 'modalidade do estudante',
  })
  modalidade: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'plano_atividades',
    comment: 'plano de tividades do estudante',
  })
  planoAtividades: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'relatorios',
    comment: 'relatorios do estudante',
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

  @Column({
    allowNull: false,
    field: 'renovacao',
    type: DataType.JSON,
    defaultValue: false,
  })
  renovacao?: JSON;

  @HasMany(() => Empresa, {
    foreignKey: 'id',
    sourceKey: 'empresaId',
  })
  empresa: Empresa;

  @HasMany(() => Estudante, {
    foreignKey: 'id',
    sourceKey: 'estudanteId',
  })
  estudante: Estudante;

  @HasMany(() => Supervisor, {
    foreignKey: 'id',
    sourceKey: 'supervisorId',
  })
  supervisor: Supervisor;
}
