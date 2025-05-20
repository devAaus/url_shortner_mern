import express from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { getAllUrls, getUrlStats } from "../controllers/user.controller.js"


const router = express.Router()

router.get("/urls", authMiddleware, getAllUrls)
router.get("/urls/stats", authMiddleware, getUrlStats)

export default router