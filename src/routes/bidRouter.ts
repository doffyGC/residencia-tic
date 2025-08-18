import { Router } from "express"; 
import { getBidForDate, getBidByOpenPeriod } from "../controllers/bidController";

const router = Router();

router.get("/getBidByDate", getBidForDate);
router.get("/getBidByOpenPeriod", getBidByOpenPeriod);

export default router;