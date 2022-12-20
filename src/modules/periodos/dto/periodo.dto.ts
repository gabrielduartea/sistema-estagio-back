export interface IPeriodoDTO {
  id: number;
  estudanteId: number;
  empresaId: number;
  professorId: number;
  estagioId: number;
  nome: string;
  telefone: string;
  supervisor: string;
  remuneracao: number;
  ajuda: number;
  codigoSeguroSaude: string;
  companhiaSeguroSaude: string;
  horasTrabalhoSemanais: string;
  categoria: string;
  modalidade: string;
  planoAtividades: string;
  relatorios: string;
  status: string;
  dataInicial: Date;
  dataFinal: Date;
  dataInclusao: Date;
  dataAlteracao: Date;
}
export class PeriodoDTO implements IPeriodoDTO {
  id: number;
  estudanteId: number;
  empresaId: number;
  professorId: number;
  estagioId: number;
  nome: string;
  telefone: string;
  supervisor: string;
  remuneracao: number;
  ajuda: number;
  codigoSeguroSaude: string;
  companhiaSeguroSaude: string;
  horasTrabalhoSemanais: string;
  categoria: string;
  modalidade: string;
  planoAtividades: string;
  relatorios: string;
  status: string;
  dataInicial: Date;
  dataFinal: Date;
  dataInclusao: Date;
  dataAlteracao: Date;
}
