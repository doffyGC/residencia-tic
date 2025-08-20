import { Request, Response } from 'express';
import { fetchUser, createUserService } from '../services/userService';

export async function getUserById(req: Request, res: Response): Promise<void> {
   try{
        const userId = req.query;
        const resultado = await fetchUser(userId);
        res.status(200).json(resultado);
   } catch (error: any) {
       res.status(500).json({ message: error.message });
   }
}
export async function createUser(req: Request, res: Response): Promise<void> {
    try {
          const userData = req.body;
          const newUser = await createUserService(userData);
          res.status(201).json(newUser);
    } catch (error: any) {
         res.status(500).json({ message: error.message });
    }
}