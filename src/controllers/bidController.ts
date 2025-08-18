import { Request, Response } from 'express';
import { fetchBidByDate, fetchBidByOpenPeriod } from '../services/bidService';

export async function getBidForDate(req: Request, res: Response): Promise<void> {
  try {
    const params = req.query;
    const resultado = await fetchBidByDate(params);
    res.status(200).json(resultado);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getBidByOpenPeriod(req: Request, res: Response): Promise<void> {
  try {
    const params = req.query;
    const resultado = await fetchBidByOpenPeriod(params);
    res.status(200).json(resultado);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}