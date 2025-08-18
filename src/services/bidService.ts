import { checkBidViaAPI } from '../models/bidModel';

export async function fetchBidByDate(queryParams: any): Promise<any>{
  if (!queryParams.dataInicial || !queryParams.dataFinal || !queryParams.codigoModalidadeContratacao || !queryParams.pagina) {
    throw new Error('Parâmetros obrigatórios: data Inicial, data Final, codigoModalidadeContratacao e pagina');
  }

  const completedUrl = "/contratacoes/publicacao"
  return await checkBidViaAPI(queryParams, completedUrl);
};

export async function fetchBidByOpenPeriod(queryParams: any): Promise<any> {
  if (!queryParams.dataFinal || !queryParams.codigoModalidadeContratacao || !queryParams.pagina) {
    throw new Error('Parâmetros obrigatórios: data Final, codigoModalidadeContratacao e pagina');
  }

  const completedUrl = "/contratacoes/proposta"
  return await checkBidViaAPI(queryParams, completedUrl);
}