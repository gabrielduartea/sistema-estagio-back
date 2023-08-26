import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Empresa } from '../empresas/empresa.entity';

@Table({
  timestamps: true,
  schema: 'public',
  tableName: 'supervisor',
  createdAt: 'dataInclusao',
  updatedAt: 'dataAlteracao',
})
export class Supervisor extends Model<Supervisor> {
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
    comment: 'Nome do Supervisor',
  })
  nome: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'email',
    comment: 'Email de contato do Supervisor',
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'telefone',
    comment: 'Telefone do Supervisor',
  })
  telefone: string;

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
