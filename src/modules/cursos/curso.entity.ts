import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'curso',
  createdAt: 'dataInclusao',
  updatedAt: 'dataAlteracao',
})
export class Curso extends Model<Curso> {
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
    comment: 'Nome do curso',
  })
  nome: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'departamento',
    comment: 'Departamento do curso',
  })
  departamento: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'descricao',
    comment: 'Descricao do curso',
  })
  descricao: string;

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
