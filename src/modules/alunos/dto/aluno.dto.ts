export interface IAlunoDto {
  id: number;
  email: string;
  nome: string;
  cursoId: number;
  telefone: string;
  cpf: string;
  enderesso: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}

export class AlunoDto implements IAlunoDto {
  id: number;
  email: string;
  nome: string;
  cursoId: number;
  telefone: string;
  cpf: string;
  enderesso: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}
