import { Request, Response } from 'express';
import { fetchLicitacaoPorData } from '../services/bidService';

export async function getBidForDate(req: Request, res: Response): Promise<void> {
  try {
    const id = req.query;
    const resultado = await fetchLicitacaoPorData(id);
    res.status(200).json(resultado);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};