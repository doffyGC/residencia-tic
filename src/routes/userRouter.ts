import { Router } from "express";

const router = Router();

// Teste de rota
router.get("/getUser", (req, res) => {
    res.json({ message: "User data retrieved successfully" });
});

export default router;