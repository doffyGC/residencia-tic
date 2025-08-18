import { consultarPublicacaoAPI } from '../models/bidModel';

export async function fetchLicitacaoPorData(queryParams: any): Promise<any>{
  if (!queryParams.dataInicial || !queryParams.dataFinal || !queryParams.codigoModalidadeContratacao || !queryParams.pagina) {
    throw new Error('Parâmetros obrigatórios: data Inicial, data Final, codigoModalidadeContratacao e pagina');
  }

  return await consultarPublicacaoAPI(queryParams);
};