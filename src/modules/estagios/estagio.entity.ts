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
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    type: DataType.INTEGER,
    comment: 'Identificador sequêncial',
  })
  id: number;

  @Column({
    allowNull: true,
    field: 'estudante_id',
    type: DataType.INTEGER,
    comment: 'ID da estudante',
  })
  @ForeignKey(() => Estudante)
  estudanteId: number;

  @Column({
    allowNull: true,
    field: 'empresa_id',
    type: DataType.INTEGER,
    comment: 'ID da empresa',
  })
  @ForeignKey(() => Empresa)
  empresaId: number;

  @Column({
    allowNull: true,
    field: 'professor_id',
    type: DataType.INTEGER,
    comment: 'ID do professor',
  })
  @ForeignKey(() => Professor)
  professorId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'supervisor_id',
    comment: 'Supervisor do estudante',
  })
  @ForeignKey(() => Supervisor)
  supervisorId: number;

  @Column({
    allowNull: true,
    field: 'remuneracao',
    type: DataType.FLOAT,
    comment: 'Remuneração',
  })
  remuneracao: number;

  @Column({
    allowNull: true,
    field: 'ajuda',
    type: DataType.FLOAT,
    comment: 'Ajuda',
  })
  ajuda: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'horas_trabalho_semanais',
    comment: 'horas de trabalho semanais do estudante',
  })
  horasTrabalhoSemanais: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'codigo_seguro_saude',
    comment: 'codigo Seguro Saude do estudante',
  })
  codigoSeguroSaude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'companhia_seguro_saude',
    comment: 'companhia Seguro Saude do estudante',
  })
  companhiaSeguroSaude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'categoria',
    comment: 'categoria do estudante',
  })
  categoria: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'modalidade',
    comment: 'modalidade do estudante',
  })
  modalidade: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'relatorios',
    comment: 'relatorios do estudante',
  })
  relatorio: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'status',
    comment: ' Status',
  })
  status: string;

  @Column({
    allowNull: true,
    field: 'data_inicial',
    type: DataType.DATE,
    comment: 'Data Inicial.',
    defaultValue: DataType.NOW,
  })
  dataInicial: Date;

  @Column({
    allowNull: true,
    field: 'data_final',
    type: DataType.DATE,
    comment: 'Data final.',
    defaultValue: DataType.NOW,
  })
  dataFinal: Date;

  @Column({
    allowNull: true,
    field: 'data_inclusao',
    type: DataType.DATE,
    comment: 'Data de inclusão do registro.',
    defaultValue: DataType.NOW,
  })
  dataInclusao: Date;

  @Column({
    allowNull: true,
    field: 'data_alteracao',
    type: DataType.DATE,
    comment: 'Data da última alteração.',
    defaultValue: DataType.NOW,
  })
  dataAlteracao: Date;

  @Column({
    allowNull: true,
    field: 'renovacao',
    type: DataType.JSON,
    defaultValue: false,
  })
  renovacao?: JSON;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'plano_estagio',
    comment: 'plano de estagio do estudante',
  })
  planoEstagio?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'aceite_orientador',
    comment: 'aceite do orientador do estudante',
  })
  aceiteOrientador?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'termo_aceite',
    comment: 'relatorios do estudante',
  })
  termoAceite?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'termo_aceite_url',
    comment: 'relatorios do estudante',
  })
  termoAceiteUrl?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'plano_estagio_url',
    comment: 'relatorios do estudante',
  })
  planoEstagioUrl?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'relatorio_url',
    comment: 'relatorios do estudante',
  })
  relatorioUrl?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'aceite_orientador_url',
    comment: 'relatorios do estudante',
  })
  aceiteOrientadorUrl?: string;

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
