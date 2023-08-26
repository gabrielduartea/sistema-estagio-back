import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'empresa',
  createdAt: 'dataInclusao',
  updatedAt: 'dataAlteracao',
})
export class Empresa extends Model<Empresa> {
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
    comment: 'Nome da Empresa',
  })
  nome: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'email',
    comment: 'Email de contato da empresa',
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'endereco',
    comment: 'endereço de contato da empresa',
  })
  endereco: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'cnpj',
    comment: 'cnpj da empresa',
  })
  cnpj: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'telefone',
    comment: 'Telefone da empresa',
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
