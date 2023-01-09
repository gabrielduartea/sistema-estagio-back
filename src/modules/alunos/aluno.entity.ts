import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Curso } from '../cursos/curso.entity';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'aluno',
  createdAt: 'dataInclusao',
  updatedAt: 'dataAlteracao',
})
export class Aluno extends Model<Aluno> {
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
    type: DataType.TEXT,
    allowNull: false,
    field: 'nome',
    comment: 'Nome do aluno',
  })
  nome: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'email',
    comment: 'Email de contato do aluno',
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'telefone',
    comment: 'Telefone do aluno',
  })
  telefone: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'enderesso',
    comment: 'enderesso do aluno',
  })
  enderesso: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'matricula',
    comment: 'matricula do aluno',
  })
  matricula: string;

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
    type: DataType.TEXT,
    allowNull: false,
    field: 'cpf',
    comment: 'CPF',
  })
  cpf: string;

  @Column({
    allowNull: true,
    field: 'curso_id',
    type: DataType.INTEGER,
    comment: 'ID do curso',
  })
  @ForeignKey(() => Curso)
  cursoId?: number;
}
