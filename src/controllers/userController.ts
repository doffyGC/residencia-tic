import { Request, Response } from 'express';

export async function getUser(req: Request, res: Response): Promise<void> {
   try{
        // TODO implementar a função do service
        const response = "resposta";
        res.status(200).json(response);
   } catch (error: any) {
       res.status(500).json({ message: error.message });
   }
}