export interface IEmpresaDTO {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}

export class EmpresaDTO implements IEmpresaDTO {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}
