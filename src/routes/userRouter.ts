import { Router } from "express";
import { getUserById, createUser } from "../controllers/userController";

const router = Router();

// Rotas GET
router.get("/getUserById", getUserById);

// Rotas POST
router.post("/createUser", createUser);

export default router;