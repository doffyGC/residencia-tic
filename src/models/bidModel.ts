import axios from 'axios';

const BASE_URL = 'https://pncp.gov.br/api/consulta/v1';

export async function consultarPublicacaoAPI(queryParams: any): Promise<any> {
  try {
    const { data } = await axios.get(`${BASE_URL}/contratacoes/publicacao`, {
      params: queryParams,
      headers: {
        'accept': '*/*'
      }
    });
    return data;
  } catch (error: any) {
    throw new Error(`Erro ao consultar API do PNCP: ${error.message}`);
  }
};