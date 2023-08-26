export interface IEstagioDTO {
  id: number;
  estudanteId: number;
  empresaId: number;
  professorId: number;
  supervisorId: number;
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
  renovacao?: JSON;
}
export class EstagioDTO implements IEstagioDTO {
  id: number;
  estudanteId: number;
  empresaId: number;
  professorId: number;
  supervisorId: number;
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
  renovacao?: JSON;
}
