export interface IEstudanteDto {
  id: number;
  email: string;
  nome: string;
  cursoId: number;
  telefone: string;
  cpf: string;
  endereco: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}

export class EstudanteDto implements IEstudanteDto {
  id: number;
  email: string;
  nome: string;
  cursoId: number;
  telefone: string;
  cpf: string;
  endereco: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}
