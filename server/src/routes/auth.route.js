import express from 'express';
import { getCurrentUser, login, logout, register } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", authMiddleware, getCurrentUser)

export default router;