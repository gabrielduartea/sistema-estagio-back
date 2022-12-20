export interface ICursoDTO {
  id: number;
  nome: string;
  departamento: string;
  descricao: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}

export class CursoDTO implements ICursoDTO {
  id: number;
  nome: string;
  departamento: string;
  descricao: string;
  dataInclusao: Date;
  dataAlteracao: Date;
}
