import { Router } from "express";
import { getUser } from "../controllers/userController";

const router = Router();

router.get("/getUser", getUser);

export default router;