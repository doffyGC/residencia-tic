import { Router } from "express"; 
import { getBidForDate } from "../controllers/bidController";

const router = Router();

router.get("/getBidByDate", getBidForDate);

export default router;