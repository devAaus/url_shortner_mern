import express from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { getAllUrls } from "../controllers/user.controller.js"


const router = express.Router()

router.get("/urls", authMiddleware, getAllUrls)

export default router