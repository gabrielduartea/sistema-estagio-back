export interface ISupervisorDto {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  empresaId: number;
  dataInclusao: Date;
  dataAlteracao: Date;
}

export class SupervisorDto implements ISupervisorDto {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  empresaId: number;
  dataInclusao: Date;
  dataAlteracao: Date;
}
