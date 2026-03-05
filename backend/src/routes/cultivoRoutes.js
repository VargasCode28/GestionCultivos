import express from "express";
import Cultivo from "../models/Cultivo.js";

const router = express.Router();

// Obtener todos los cultivos
router.get("/", async (req, res) => {
  const cultivos = await Cultivo.find();
  res.json(cultivos);
});

// Crear cultivo
router.post("/", async (req, res) => {
  const nuevoCultivo = new Cultivo(req.body);
  await nuevoCultivo.save();
  res.status(201).json(nuevoCultivo);
});

export default router;