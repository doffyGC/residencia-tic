import { Router } from "express";
import { getUser } from "../controllers/userController";

const router = Router();

// Teste de rota
router.get("/getUser", getUser);

export default router;