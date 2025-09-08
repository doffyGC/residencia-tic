import { Router } from "express";
import { sendReportEmail } from "../controllers/emailController";

const router = Router();

router.post("/send", sendReportEmail);

export default router;