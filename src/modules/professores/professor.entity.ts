import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'professores',
  createdAt: 'dataInclusao',
  updatedAt: 'dataAlteracao',
})
export class Professor extends Model<Professor> {
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
    comment: 'Nome do professor',
  })
  nome: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'email',
    comment: 'Email de contato do professor',
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'telefone',
    comment: 'Telefone do professor',
  })
  telefone: string;

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
