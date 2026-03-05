import express from "express";
import { register, login } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Solo el admin puede registrar nuevos usuarios
router.post("/register", authMiddleware(["admin"]), register);

// Login abierto para todos
router.post("/login", login);

export default router;