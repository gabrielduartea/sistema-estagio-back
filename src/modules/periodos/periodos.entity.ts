import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Estudante } from '../estudantes/estudante.entity';
import { Empresa } from '../empresas/empresa.entity';
import { Estagio } from '../estagios/estagio.entity';
import { Professor } from '../professores/professor.entity';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'estagios',
  createdAt: 'dataInclusao',
  updatedAt: 'dataAlteracao',
})
export class Periodo extends Model<Periodo> {
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
    allowNull: false,
    field: 'estagio_id',
    type: DataType.INTEGER,
    comment: 'ID do estagio',
  })
  @ForeignKey(() => Estagio)
  estagioId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'nome',
    comment: 'Nome do estudante',
  })
  nome: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'telefone',
    comment: 'Telefone do estudante',
  })
  telefone: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'supervisor',
    comment: 'Supervisor do estudante',
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
    field: 'horasTrabalhoSemanais',
    comment: 'horas de trabalho semanais do estudante',
  })
  horasTrabalhoSemanais: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'codigoSeguroSaude',
    comment: 'codigo Seguro Saude do estudante',
  })
  codigoSeguroSaude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'companhiaSeguroSaude',
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
}
