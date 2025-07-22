import { Router } from "express"; 

const router = Router();

router.get("/getBid", (req, res) => {
    res.json({ message: "Bid data retrieved successfully" });
});
