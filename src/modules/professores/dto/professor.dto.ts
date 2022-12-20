export interface IProfessorDto {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}

export class ProfessorDto implements IProfessorDto {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}
